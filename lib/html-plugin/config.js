import template from './template.js';

const config = {
  meta: [
    { charset: 'utf-8' },
    {
      name: 'viewport',
      content: 'user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width, viewport-fit=cover',
    },
    { name: 'theme-color', content: '#000000' },
    { name: 'description', content: '' },
    { name: 'keywords', content: '' },
  ],
  publicPath: '/',
  template,
};
export default config;
