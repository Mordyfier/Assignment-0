function countOfAllBooleans(arr) {
  let count = 0;
  arr.forEach(x => {
    if (typeof(x) === 'boolean') {
      count++;
    }
  });
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleans;