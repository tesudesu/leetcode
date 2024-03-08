// https://leetcode.com/problems/split-the-array/

var isPossibleToSplit = function(nums) {
    const freq = new Map();

    for (let i = 0; i < nums.length; i++) {
        freq.set(nums[i], (freq.get(nums[i]) + 1) || 1);
        if (freq.get(nums[i]) > 2) {
            return false;
        } 
    }

    return true;
};