// https://leetcode.com/problems/maximum-difference-between-increasing-elements/

var maximumDifference = function(nums) {
    let min = nums[0];
    let max = 0;
    let currMaxDiff = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
            max = 0;
        } else if (nums[i] > max) {
            max = nums[i];
            currMaxDiff = Math.max(currMaxDiff, max - min);
        } 
    }

    return currMaxDiff > 0 ? currMaxDiff : -1;
};