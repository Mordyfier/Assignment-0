function sumOfMinimumAndMaximum(nums) {
  let min = nums[0];
  let max = nums[0];
  nums.forEach(x => {
    if (x < min) {
      min = x;
    } else if (x > max) {
      max = x;
    }
  });
  return min + max;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;