// https://leetcode.com/problems/maximum-good-subarray-sum/

var maximumSubarraySum = function(nums, k) {
    const prefix = new Map();

    let prefixSum = 0;
    let maxSum = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];

        const lower = nums[i] - k;
        if (prefix.has(lower)) {
            maxSum = Math.max(maxSum, prefixSum - prefix.get(lower) + nums[i] - k);
        }

        const upper = nums[i] + k;
        if (prefix.has(upper)) {
            maxSum = Math.max(maxSum, prefixSum - prefix.get(upper) + nums[i] + k);
        }

        if (!prefix.has(nums[i]) || prefix.get(nums[i]) > prefixSum) {
            prefix.set(nums[i], prefixSum);
        }
    }

    return maxSum === -Infinity ? 0 : maxSum;
};