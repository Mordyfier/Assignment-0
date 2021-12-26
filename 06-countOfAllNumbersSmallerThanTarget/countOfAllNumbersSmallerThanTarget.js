function countOfAllNumbersSmallerThanTarget(nums, target) {
  let count = 0;
  nums.forEach(x => { 
    if (x < target) {
      count++;
    }
  })
  return count;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;