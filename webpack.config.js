const path = require('path');

const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  entry: PATHS.source + '/index.js',
  output: {
    path: PATHS.build,
    filename: 'main.js'
  }
};