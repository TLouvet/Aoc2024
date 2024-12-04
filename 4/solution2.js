const { getInput } = require("./common");

const lines = getInput()
let sum = 0;

for (let row = 1; row < lines.length - 1; row++) {
  for (let col = 1; col < lines[row].length - 1; col++) {
    if (lines[row][col] === "A" && isValidLeftDiagonal(row, col) && isValidRightDiagonal(row, col)) {
      sum++;
    }
  }
}

console.log("Partie 2:", sum)

function isValidLeftDiagonal(row, col) {
  const northWestEntry = lines[row - 1][col - 1]
  const southEastEntry = lines[row + 1][col + 1]
  return (northWestEntry === "M" && southEastEntry === "S") || (northWestEntry === "S" && southEastEntry === "M")
}

function isValidRightDiagonal(row, col) {
  const northEastEntry = lines[row - 1][col + 1]
  const southWestEntry = lines[row + 1][col - 1]
  return (northEastEntry === "M" && southWestEntry === "S") || (northEastEntry === "S" && southWestEntry === "M")
}