const { openFile } = require("../utils");

const lines = openFile("./index.txt").split("\n");

console.log("Partie 1:", exec(lines, false))
console.log("Partie 2:", exec(lines, true));

function exec(lines, isSol2) {
  let sum = 0
  for (const line of lines) {
    const [res, eq] = line.split(":");
    const eqTerms = eq.trim().split(" ").map(Number);
    if (dfs(+res, eqTerms[0], eqTerms.slice(1), isSol2)) {
      sum += +res;
    }
  }

  return sum;
}

function dfs(res, curr, arr, isSol2) {
  if (arr.length === 0 && res == curr) {
    return true;
  }

  if (arr.length === 0) {
    return false;
  }

  const plus = dfs(res, curr + arr[0], arr.slice(1), isSol2)
  const mul = dfs(res, curr * arr[0], arr.slice(1), isSol2)

  if (isSol2) {
    const withOr = Number(String(curr) + String(arr[0]))
    const or = dfs(res, withOr, arr.slice(1), isSol2);

    return plus || mul || or;
  }

  return plus || mul;
}
