// https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/

var maximumSubarraySum = function(nums, k) {
    let maxSum = 0;
    let left = 0;
    let sum = 0;
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        map.set(nums[i], (map.get(nums[i]) + 1) || 1);

        if (i - left + 1 === k) {
            if (map.size === k) {
                maxSum = Math.max(maxSum, sum);
            }
        } else if (i - left + 1 > k) {
            sum -= nums[left];
            map.set(nums[left], map.get(nums[left]) - 1);
            if (map.get(nums[left]) === 0) {
                map.delete(nums[left]);
            }
            left++;
            if (map.size === k) {
                maxSum = Math.max(maxSum, sum);
            }
        }
    }

    return maxSum;
};