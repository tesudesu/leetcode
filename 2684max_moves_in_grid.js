// https://leetcode.com/problems/maximum-number-of-moves-in-a-grid/

var maxMoves = function(grid) {
    const dp = Array(grid.length).fill().map(() => Array(grid[0].length).fill(0));

    for (let j = grid[0].length - 2; j >= 0; j--) {
        for (let i = 0; i < grid.length; i++) {
            if (i - 1 >= 0 && grid[i - 1][j + 1] > grid[i][j]) {
                dp[i][j] = Math.max(dp[i][j], dp[i - 1][j + 1] + 1);
            } 
            if (grid[i][j + 1] > grid[i][j]) {
                dp[i][j] = Math.max(dp[i][j], dp[i][j + 1] + 1);
            } 
            if (i + 1 < grid.length && grid[i + 1][j + 1] > grid[i][j]) {
                dp[i][j] = Math.max(dp[i][j], dp[i + 1][j + 1] + 1);
            } 
        }
    }

    let max = 0;

    for (let i = 0; i < grid.length; i++) {
        max = Math.max(max, dp[i][0]);
    }

    return max;
};