function countOfAllBooleans(arr) {
  let count = 0;
  arr.forEach(x => {
    if (x === true || x === false) {
      count++;
    }
  });
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleans;