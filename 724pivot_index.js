// https://leetcode.com/problems/find-pivot-index/

var pivotIndex = function(nums) {
    let tot = 0;
    for (let i = 0; i < nums.length; i++) {
        tot += nums[i];
    }
    let left = 0;
    let right = tot;
    for (let i = 0; i < nums.length; i++) {
        right = right - nums[i];
        left = tot - right - nums[i];
        if (right === left) return i;
    }
    return -1;
};