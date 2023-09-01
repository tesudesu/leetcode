// https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/

var minAbsoluteDifference = function(nums, x) {
    let min = Infinity;

    for (let i = 0; i < nums.length - x; i++) {
        for (let j = i + x; j < nums.length; j++) {
            min = Math.min(min, Math.abs(nums[j] - nums[i]));
            if (min === 0) return 0;
        }
    }

    return min;
};