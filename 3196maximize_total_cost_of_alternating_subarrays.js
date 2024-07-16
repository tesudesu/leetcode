// https://leetcode.com/problems/maximize-total-cost-of-alternating-subarrays/

var maximumTotalCost = function(nums) {
    const reverse = Array(nums.length).fill();
    const notReverse = Array(nums.length).fill();
    reverse[0] = nums[0];
    notReverse[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        reverse[i] = notReverse[i - 1] + nums[i] * -1;
        notReverse[i] = Math.max(notReverse[i - 1] + nums[i], reverse[i - 1] + nums[i]);
    }

    return Math.max(reverse[nums.length - 1], notReverse[nums.length - 1]);
};