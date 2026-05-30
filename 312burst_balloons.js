// https://leetcode.com/problems/burst-balloons/

var maxCoins = function(nums) {
    const n = nums.length;
    nums.unshift(1);
    nums.push(1);

    const dp = Array(n + 2).fill().map(() => Array(n + 2).fill(0));

    for (let len = 1; len <= n; len++) {
        for (let left = 1; left + len - 1 <= n; left++) {
            const right = left + len - 1;
            for (let k = left; k <= right; k++) {
                dp[left][right] = Math.max(dp[left][right], dp[left][k - 1] + nums[left - 1] * nums[k] * nums[right + 1] + dp[k + 1][right]);
            }
        }
    }

    return dp[1][n];
};