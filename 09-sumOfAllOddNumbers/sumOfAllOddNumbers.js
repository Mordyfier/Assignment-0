function sumOfAllOddNumbers(nums) {
  let count = 0;
  nums.forEach(x => {
    if (x % 2 === 1) {
      count += 1;
    }
  });
  return count;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;