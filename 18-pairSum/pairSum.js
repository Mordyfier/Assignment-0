function pairSum(nums, target) {
  if (nums.length < 2) {
    throw "Length of 'nums' is less than 2, this isn't going to work."
  }
  const numSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (numSet.has(target - nums[i])) {
      return true;
    } else {
      numSet.add(nums[i]);
    }
  }
  return false;
}

// Do not edit this line;
module.exports = pairSum;