const { getInput, MUL_REGEX, getProduct } = require("./common");

console.log("Part 1:", (getInput().match(MUL_REGEX) || []).reduce((acc, curr) => acc + getProduct(curr), BigInt(0)));
