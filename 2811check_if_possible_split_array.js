// https://leetcode.com/problems/check-if-it-is-possible-to-split-array/

var canSplitArray = function(nums, m) {
    if (nums.length <= 2) return true;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] + nums[i - 1] >= m) return true;
    }

    return false;
};