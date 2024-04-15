// https://leetcode.com/problems/first-missing-positive/

var firstMissingPositive = function(nums) {
    const n = nums.length;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= 0) {
            nums[i] = n + 1;
        } 
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > n) continue;
        const ind = Math.abs(nums[i]) - 1;
        if (nums[ind] > 0) {
            nums[ind] *= -1;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }

    return n + 1;
};