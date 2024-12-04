const { openFile } = require("../utils");

module.exports = {
  getInput() {
    return openFile("./input.txt").split('\n').map(l => l.slice(0, -1));
  }
}