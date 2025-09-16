// https://leetcode.com/problems/maximum-unique-subarray-sum-after-deletion/

var maxSum = function(nums) {
    const added = new Set();
    let sum = 0;
    let maxVal = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        maxVal = Math.max(maxVal, nums[i]);
        if (added.has(nums[i]) || nums[i] <= 0) {
            continue;
        }
        added.add(nums[i]);
        sum += nums[i];
    }

    return sum === 0 ? maxVal : sum;
};