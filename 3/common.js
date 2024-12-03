const { openFile } = require("../utils");

module.exports = {
  getProduct(expression) {
    const [arg1, arg2] = expression.split(',')
    const mul1 = +arg1.split('(')[1];
    const mul2 = +arg2.split(')')[0];
    return BigInt(mul1 * mul2);
  },
  getInput() {
    return openFile('./input.txt')
  },
  /**
 * Match les expressions qui sont exactement de la forme suivante: mul(nombre,nombre)
 */
  MUL_REGEX: /(mul\(\d*,\d*\))/g
}