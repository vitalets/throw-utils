const jsdoc2md = require('jsdoc-to-markdown');

module.exports = {
  transforms: {
    API() {
      return jsdoc2md.renderSync({
        files: 'index.js',
        'heading-depth': 3,
        'global-index-format': 'none',
        'param-list-format': 'list',
      });
    }
  }
};
