// https://leetcode.com/problems/degree-of-an-array/

var findShortestSubArray = function(nums) {
    let freq = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!freq.has(nums[i])) {
            freq.set(nums[i], 1);
        } else {
            freq.set(nums[i], freq.get(nums[i]) + 1);
        }
    }
    const max = Math.max(...freq.values());
    let maxValues = [];
    for (let [key, value] of freq) {
        if (value === max) {
            maxValues.push(key);
        }
    }
    let minLength = Infinity;
    for (let i = 0; i < maxValues.length; i++) {
        let start = nums.indexOf(maxValues[i]);
        let end = nums.lastIndexOf(maxValues[i]);
        let length = end - start + 1;
        if (length < minLength) {
            minLength = length;
        }
    }
    return minLength;
};