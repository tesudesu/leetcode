// https://leetcode.com/problems/largest-number-at-least-twice-of-others/

var dominantIndex = function(nums) {
    const max = Math.max(...nums);
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (max < nums[i] * 2) {
            count++;
        }
        if (count > 1) {
            return -1;
        }
    }
    return nums.indexOf(max);
};