const { getInput } = require("./common");

const lines = getInput()

let sum = 0;

for (let row = 0; row < lines.length; row++) {
  for (let col = 0; col < lines[row].length; col++) {
    if (lines[row][col] === "X") {
      sum += Object
        .entries(strategies(row, col))
        .reduce((acc, [k, v]) => v ? [...acc, k] : acc, [])
        .reduce((acc, curr) => acc + dfs(row, col, curr), 0);
    }
  }
}

console.log("Partie 1:", sum)

function dfs(row, col, dir, index = 0) {
  if (index == "XMAS".length) {
    return 1;
  }

  if (lines[row][col] !== "XMAS"[index]) {
    return 0;
  }

  const nextCol = dir.includes("E") ? col + 1 : dir.includes('W') ? col - 1 : col; // Comment ça Sonarqube ? Elles sont pas belles mes ternaires ??
  const nextRow = dir.includes("S") ? row + 1 : dir.includes('N') ? row - 1 : row;

  return dfs(nextRow, nextCol, dir, index + 1);
}

function strategies(row, col) {
  const v = validators(row, col);
  return {
    N: v.north && v.isM(lines[row - 1][col]),
    S: v.south && v.isM(lines[row + 1][col]),
    E: v.east && v.isM(lines[row][col + 1]),
    W: v.west && v.isM(lines[row][col - 1]),
    NW: v.north && v.west && v.isM(lines[row - 1][col - 1]),
    NE: v.north && v.east && v.isM(lines[row - 1][col + 1]),
    SW: v.south && v.west && v.isM(lines[row + 1][col - 1]),
    SE: v.south && v.east && v.isM(lines[row + 1][col + 1])
  }
}

function validators(row, col) {
  return {
    north: row > 2,
    south: row < lines.length - 3,
    east: col < lines[0].length - 3,
    west: col > 2,
    isM: (l) => l === "M"
  }
}