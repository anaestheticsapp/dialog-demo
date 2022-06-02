import fse from "fs-extra";
import { resolve, parse, extname } from 'path';

import config from './html-plugin/config.js';

const getFiles = (bundle) => {
  const files = Object.values(bundle).filter(
    (file) => file.isEntry || (typeof file.type === 'string' ? file.type === 'asset' : file.isAsset)
  );
  const result = {};
  for (const file of files) {
    const { fileName } = file;
    const extension = extname(fileName).substring(1);
    result[extension] = (result[extension] || []).concat(file);
  }
  return result;
};

const filesCollection = new Map();
const workingDir = resolve('./src/html/');

function readDirectorySync(path = './src/html/') {
  const currentDirPath = resolve(path);
  const currentDir = fse.readdirSync(currentDirPath, 'utf8');

  for (const item of currentDir) {
    const currentItemPath = resolve(path + '/' + item);
    if (fse.statSync(currentItemPath).isFile()) {
      let htmlPath = currentItemPath.replace(workingDir, '');
      htmlPath = htmlPath.replace(/\\/g, '/');
      filesCollection.set(path + item, parse(htmlPath));
    } else {
      const directoryPath = path + item + '/';
      readDirectorySync(directoryPath);
    }
  }
}


export default function htmlPlugin(htmlFiles = [], opts = {}) {
  return {
    name: 'htmlPlugin',
    buildStart() {
      readDirectorySync();
      for (const [origin, path] of filesCollection) {
        this.addWatchFile(origin);
      }
    },
    async generateBundle(output, bundle) {
      for (const [origin, parsedPath] of filesCollection) {
        const { title, attributes, meta, publicPath, template, routes } = Object.assign(
          {},
          config,
          opts
        );
        const dir = parsedPath.dir.substring(1);
        const fileName = dir
        ? dir + '/' + parsedPath.base
        : parsedPath.base;

        const files = getFiles(bundle);

        this.emitFile({
          fileName,
          source: await template({ attributes, files, origin, meta, publicPath, title, routes }),
          type: 'asset',
        });
      }
    },
  };
}
