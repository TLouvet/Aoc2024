const { openFile } = require("../utils");


module.exports = {
  getData() {
    const lines = openFile("./input.txt").split('\n');
    return parseFileLists(lines);
  }
}

function parseFileLists(dataFromFile) {
  const initialValue = { list1: [], list2: [] };

  return dataFromFile.reduce((acc, curr) => {
    const [v1, v2] = curr.split(' ').filter(Boolean).map(e => parseInt(e));
    acc.list1.push(v1);
    acc.list2.push(v2);
    return acc;
  }, initialValue)
}