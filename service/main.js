
require('ts-node').register({
  project: __dirname,
  fast: true
})
module.exports = require('./index.ts')