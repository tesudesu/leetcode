// https://leetcode.com/problems/maximum-gap/

var maximumGap = function(nums) {
    let max = 0;

    nums.sort((a, b) => a - b);

    for (let i = 1; i < nums.length; i++) {
        max = Math.max(max, nums[i] - nums[i - 1]);
    }

    return max;
};