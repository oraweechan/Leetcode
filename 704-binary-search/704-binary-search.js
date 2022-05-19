/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
     let left = 0, right = nums.length -1, pivot = 0;
    while (left <= right) {
        pivot = left + Math.floor((right - left) / 2); 
        if (target === nums[pivot]) return pivot;
        else if (target > nums[pivot]) {
            left = pivot + 1;
        }
        else {
            right = pivot -1;
        }
    }
    return -1;
};