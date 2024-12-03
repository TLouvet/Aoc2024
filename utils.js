const fs = require('fs')

module.exports = {
  openFile(path) {
    return fs.readFileSync(path, { encoding: 'utf-8' })
  }
}