// https://leetcode.com/problems/number-of-ways-to-split-array/

var waysToSplitArray = function(nums) {
    let sum = 0;

    for (const num of nums) {
        sum += num;
    }

    let tot = 0;
    let prefixSum = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        prefixSum += nums[i];
        sum -= nums[i];
        if (prefixSum >= sum) {
            tot++;
        }
    }

    return tot;
};