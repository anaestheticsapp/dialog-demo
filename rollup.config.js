import rimraf from 'rimraf';
import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';

import htmlPlugin from './lib/html-plugin.js';
import assetPlugin from './lib/asset-plugin.js';

const isProduction = process.env.BUILD === 'production';

const config = {
  input: './src/main.ts',
  preserveEntrySignatures: false,
  output: {
    entryFileNames: 'js/[name].[hash].js',
    chunkFileNames: 'js/[name]-[hash].js',
    assetFileNames: 'assets/[name].[hash][extname]',
    dir: 'public/',
    format: 'esm',
    plugins: [],
    sourcemap: isProduction ? false : true,
  },
  watch: {
    exclude: ['node_modules/**'],
  },
  plugins: [
    nodeResolve({ browser: true }),
    replace({
      preventAssignment: true,
    }),
    assetPlugin({
      initialAssets: ['./src/assets/css/dark.css', './src/assets/css/light.css'],
    }),
    htmlPlugin(),
    typescript(),
    isProduction
      ? terser({
          ecma: 2016,
          compress: { drop_console: true },
        })
      : '',
    isProduction
      ? ''
      : serve({
          contentBase: 'public',
          host: 'localhost',
          port: 8080,
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
          },
        }),
  ],
};

console.log('process.env.BUILD', process.env.BUILD);

rimraf.sync('./public/');

export default config;
