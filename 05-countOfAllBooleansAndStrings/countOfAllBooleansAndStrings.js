function countOfAllBooleansAndStrings(arr) {
  let count = 0;
  arr.forEach(x => {
    if (typeof(x) === "boolean" || typeof(x) === "string") {
      count++;
    }
  });
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;