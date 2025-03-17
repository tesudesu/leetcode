// https://leetcode.com/problems/maximum-ascending-subarray-sum/

var maxAscendingSum = function(nums) {
    let max = nums[0];
    let curr = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            curr += nums[i];
            max = Math.max(max, curr);
        } else {
            curr = nums[i];
        }
    }

    return max;
};