// https://leetcode.com/problems/count-elements-with-maximum-frequency/

var maxFrequencyElements = function(nums) {
    const freq = new Map();
    let max = 0;
    let maxCount = 0;

    for (let i = 0; i < nums.length; i++) {
        freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
        if (freq.get(nums[i]) > max) {
            max = freq.get(nums[i]);
            maxCount = freq.get(nums[i]);
        } else if (freq.get(nums[i]) === max) {
            maxCount += freq.get(nums[i]);
        }
    }

    return maxCount;
};