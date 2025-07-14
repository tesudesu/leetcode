// https://leetcode.com/problems/maximum-difference-between-adjacent-elements-in-a-circular-array/

var maxAdjacentDistance = function(nums) {
    let max = Math.abs(nums[0] - nums[nums.length - 1]);

    for (let i = 1; i < nums.length; i++) {
        max = Math.max(max, Math.abs(nums[i] - nums[i - 1]));
    }

    return max;
};