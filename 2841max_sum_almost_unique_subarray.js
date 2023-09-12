// https://leetcode.com/problems/maximum-sum-of-almost-unique-subarray/

var maxSum = function(nums, m, k) {
    const subarray = new Set();
    const freq = new Map();

    let sum = 0;

    for (let i = 0; i < k - 1; i++) {
        subarray.add(nums[i]);
        freq.set(nums[i], freq.get(nums[i]) + 1 || 1);
    }

    for (let i = k - 1; i < nums.length; i++) {
        subarray.add(nums[i]);
        freq.set(nums[i], freq.get(nums[i]) + 1 || 1);
        if (subarray.size >= m) {
            let tempSum = 0;
            for (let j = i; j > i - k; j--) {
                tempSum += nums[j];
            }
            sum = Math.max(sum, tempSum);
        }
        if (freq.get(nums[i - k + 1]) === 1) {
            subarray.delete(nums[i - k + 1]);
            freq.delete(nums[i - k + 1]);
        } else {
            freq.set(nums[i - k + 1], freq.get(nums[i - k + 1]) - 1); 
        }
    }

    return sum;
};