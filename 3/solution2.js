const { getProduct, MUL_REGEX, getInput } = require("./common");

const lines = getInput();
let sum = BigInt(0); // Compte des résultats de fin, je suis pas certain que c'était nécessaire
const DONT = "don't()";
const DO = "do()";
let start = 0;

while (start !== -1) {
  const nextDont = lines.indexOf(DONT, start);
  const endValue = nextDont === -1 ? lines.length : nextDont;

  const currentSegment = lines.slice(start, endValue);
  const parsedExpressions = currentSegment.match(MUL_REGEX) ?? [];

  for (const exp of parsedExpressions) {
    sum += getProduct(exp)
  }

  start = lines.indexOf(DO, endValue);
}

console.log("PART2:", sum)