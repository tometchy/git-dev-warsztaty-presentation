exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:4000',
      show: false 
    }
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'git-dev-warsztaty-presentation'
}
