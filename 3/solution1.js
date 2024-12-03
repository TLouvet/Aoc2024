const { getInput, MUL_REGEX, getProduct } = require("./common");

const lines = getInput();
const expressions = lines.match(MUL_REGEX);
let sum = BigInt(0); // Compte des résultats de fin, je suis pas certain que c'était nécessaire

for (const expression of expressions) {
  sum += getProduct(expression);
}

console.log("Part 1:", sum);
