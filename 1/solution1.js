const { getData } = require("./common");

const { list1, list2 } = getData();
list1.sort((a, b) => a - b);
list2.sort((a, b) => a - b);

const sum = list1.reduce((acc, curr, idx) => acc + Math.abs(curr - list2[idx]), 0);

console.log("Partie 1:", sum);

