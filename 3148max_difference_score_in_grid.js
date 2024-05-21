// https://leetcode.com/problems/maximum-difference-score-in-a-grid/

var maxScore = function(grid) {
    const dp = Array(grid.length).fill().map(() => Array(grid[0].length).fill());
    dp[grid.length - 1][grid[0].length - 1] = 0;

    for (let i = grid[0].length - 2; i >= 0; i--) {
        dp[grid.length - 1][i] = Math.max(grid[grid.length - 1][i + 1] - grid[grid.length - 1][i], grid[grid.length - 1][i + 1] - grid[grid.length - 1][i] + dp[grid.length - 1][i + 1]);
    }

    for (let i = grid.length - 2; i >= 0; i--) {
        dp[i][grid[0].length - 1] = Math.max(grid[i + 1][grid[0].length - 1] - grid[i][grid[0].length - 1], grid[i + 1][grid[0].length - 1] - grid[i][grid[0].length - 1] + dp[i + 1][grid[0].length - 1]);
    }

    for (let i = grid.length - 2; i >= 0; i--) {
        for (let j = grid[0].length - 2; j >= 0; j--) {
            dp[i][j] = Math.max(grid[i][j + 1] - grid[i][j], grid[i][j + 1] - grid[i][j] + dp[i][j + 1]);
            dp[i][j] = Math.max(dp[i][j], grid[i + 1][j] - grid[i][j], grid[i + 1][j] - grid[i][j] + dp[i + 1][j]);
        }
    }

    let max = -Infinity;

    for (let i = 0; i < dp.length; i++) {
        for (let j = 0; j < dp[0].length; j++) {
            if (i === dp.length - 1 && j === dp[0].length - 1) continue;
            max = Math.max(max, dp[i][j]);
        }
    }

    return max;
};