function sumOfAllEvenNumbers(nums) {
  let count = 0;
  nums.forEach(x => {
    if (x % 2 === 0) {
      count++;
    }
  });
  return count;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;