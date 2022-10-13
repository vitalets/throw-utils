const markdownMagic = require('markdown-magic')
const { buildDocumentation, documentationToMarkdown } = require('tsdoc-markdown');

const config = {
  transforms: {
    API() {
      const entries = buildDocumentation({ inputFiles: [ 'src/index.ts' ] });
      let md = documentationToMarkdown({
        entries,
        options: { headingLevel: '##' }
      });
      // remove own table of contents
      md = md.replace(/## :toolbox: Functions[\s\S]+#gear-toerror\)/, '');
      // remove emoji berofe fn names
      md = md.replace(/# :gear:/g, '#');
      return md.trim();
    }
  }
}

markdownMagic('README.md', config);
