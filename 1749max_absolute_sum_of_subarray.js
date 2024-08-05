// https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/

var maxAbsoluteSum = function(nums) {
    let currPosSum = 0;
    let currNegSum = 0;
    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        currPosSum += nums[i];
        if (currPosSum < 0) {
            currPosSum = 0;
        }
        currNegSum += nums[i];
        if (currNegSum > 0) {
            currNegSum = 0;
        }
        max = Math.max(max, currPosSum, Math.abs(currNegSum));
    }

    return max;
};