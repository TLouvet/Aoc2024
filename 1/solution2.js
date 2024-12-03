const { getData } = require("./common");


const { list1, list2 } = getData();
const hashmap = mapSecondListValues(getFirstListIDs(list1), list2);
const productSum = Object.entries(hashmap).reduce((acc, [key, val]) => acc + parseInt(key) * val, 0);
console.log("Partie 2:", productSum);


function getFirstListIDs(list) {
  return list.reduce((acc, curr) => {
    acc[curr] = 0;
    return acc;
  }, {})
}

function mapSecondListValues(hmap, list) {
  for (const entry of list) {
    if (entry in hmap) {
      hmap[entry]++;
    }
  }

  return hmap;
}
