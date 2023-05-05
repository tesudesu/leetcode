// https://leetcode.com/problems/monotonic-array/

var isMonotonic = function(nums) {
    let curr = nums[0];
    let increasing = true;
    let decreasing = true;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > curr) {
            decreasing = false;
        } else if (nums[i] < curr) {
            increasing = false;
        }
        if (!increasing && !decreasing) {
            return false;
        }
        curr = nums[i];
    }
    return true;
};