/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  // using binary search O(log(n)) time
  let left = 0;
  let length = arr.length - 1;
  while (left <= length) {
    const mid = left + Math.floor((length-left) / 2);
    if (arr[mid] === target) {
      return true;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      length = mid - 1;
    }
  }
  return false;
}

var nums = [1, 4, 6, 7, 9, 17, 45]
console.log(findInOrderedSet(nums, 4));
console.log(findInOrderedSet(nums, 2)); 

module.exports = findInOrderedSet;
