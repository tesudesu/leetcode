// https://leetcode.com/problems/maximum-erasure-value/

var maximumUniqueSubarray = function(nums) {
    const set = new Set();
    let max = 0;
    let curr = 0;
    let left = 0;

    for (let i = 0; i < nums.length; i++) {
        while (set.has(nums[i])) {
            set.delete(nums[left]);
            curr -= nums[left];
            left++;
        }
        set.add(nums[i]);
        curr += nums[i];
        max = Math.max(max, curr);
    }

    return max;
};