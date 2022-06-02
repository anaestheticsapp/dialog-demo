import { readFileSync } from 'fs';
import styles from '../../src/styles.js';

const makeHtmlAttributes = (attributes) => {
  if (!attributes) return '';

  const keys = Object.keys(attributes);
  return keys.reduce((result, key) => (result += ` ${key}="${attributes[key]}"`), '');
};

const removeHash = (str) => str.replace(/\.[a-z0-9]+\./, '.');

const insertAt = (text, source, pos) => source.slice(0, pos) + text + source.slice(pos);

const findIn = (str, html) => html.indexOf(str);

function addHashToFileNames(fileName, html) {
  const originalName = removeHash(fileName);
  const index = html.indexOf(originalName);
  if (index === -1) throw new Error(`html-plugin/template: Not found "${originalName}" in html`);
  return html.replace(originalName, fileName);
}
function insertAfter(insertStr, findStr, source) {
  const pos = findIn(findStr, source);
  return insertAt(insertStr, source, pos + findStr.length)
}

function injectMetaTags(metaTags, html) {
  const leadingSpace = '  ';
  const meta = '\n' + metaTags
    .map((input) => `${leadingSpace}<meta${makeHtmlAttributes(input)}>`)
    .join('\n');

  return insertAfter(meta, '<head>', html);
}
function injectGlobalStyles(html) {
  return insertAfter(styles, '<style>', html);
}

export default async function template({ files, origin, meta }) {
  let html = readFileSync(origin).toString();

  for (const { fileName } of files.js || []) {
    html = addHashToFileNames(fileName, html);
  }
  for (const { fileName } of files.css || []) {
    html = addHashToFileNames(fileName, html);
  }

  html = injectMetaTags(meta, html);
  html = injectGlobalStyles(html);

  return html;
};
