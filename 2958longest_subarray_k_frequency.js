// https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/

var maxSubarrayLength = function(nums, k) {
    let count = new Map();
    let longest = 1;
    let left = 0;

    for (let i = 0; i < nums.length; i++) {
        if (!count.has(nums[i])) {
            count.set(nums[i], 1);
        } else {
            while (count.get(nums[i]) === k) {
                count.set(nums[left], count.get(nums[left]) - 1);
                left++;
            }
            count.set(nums[i], count.get(nums[i]) + 1);
        }
        longest = Math.max(longest, i - left + 1);
    }

    return longest;
};