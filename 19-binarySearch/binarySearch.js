class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }
  binarySearch(nums, target, start = 0, end = nums.length-1) {
    let mid = Math.floor((start + end)/2);
    if (start == end) {
      return false;
    }
    if (target == nums[mid]) {
      return true;
    } else if (target > nums[mid]) {
      return this.binarySearch(nums, target, mid+1, end); 
    } else {
      return this.binarySearch(nums, target, start, mid);
    }
  }
  // Or, using only parameters (nums, target):
  //
  // binarySearch(nums, target) {
  //   let mid = Math.floor(nums.length/2);
  //   if (nums.length == 0) {
  //     return false;
  //   }
  //   if (target == nums[mid]) {
  //     return true;
  //   } else if (target > nums[mid]) {
  //     const aux = nums.slice(mid+1, nums.length);
  //     return this.binarySearch(aux, target)
  //   } else {
  //     const aux = nums.slice(0, mid);
  //     return this.binarySearch(aux, target)
  //   }
  // }
}
// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;