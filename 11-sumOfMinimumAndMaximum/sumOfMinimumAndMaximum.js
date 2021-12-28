function sumOfMinimumAndMaximum(nums) {
  // ------- O(n) ---------
  // let min = nums[0];
  // let max = nums[0];
  // nums.forEach(x => {
  //   if (x < min) {
  //     min = x;
  //   } else if (x > max) {
  //     max = x;
  //   }
  // });
  // return min + max;
  // ------- O(1) ---------
  return nums[0] + nums[nums.length-1];
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;