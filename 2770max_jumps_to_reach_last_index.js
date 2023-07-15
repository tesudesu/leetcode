// https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/

var maximumJumps = function(nums, target) {
    if (target === 0) return -1;

    let dp = Array(nums.length).fill(0);
    dp[0] = 1;

    for (let i = 1; i < nums.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (Math.abs(nums[i] - nums[j]) <= target && dp[j] !== 0) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return dp[dp.length - 1] !== 0 ? dp[dp.length - 1] - 1 : -1;
};