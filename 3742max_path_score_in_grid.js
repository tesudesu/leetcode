// https://leetcode.com/problems/maximum-path-score-in-a-grid/

var maxPathScore = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;

    const dp = Array(m).fill().map(() => Array(n).fill().map(() => Array(k + 1).fill(-Infinity)));
    dp[0][0][0] = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            for (let c = 0; c <= k; c++) {
                if (dp[i][j][c] === -Infinity) continue;

                if (i + 1 < m) {
                    let currCost = 0;
                    if (grid[i + 1][j] === 1 || grid[i + 1][j] === 2) {
                        currCost++;
                    }
                    if (c + currCost <= k) {
                        dp[i + 1][j][c + currCost] = Math.max(dp[i + 1][j][c + currCost], dp[i][j][c] + grid[i + 1][j]);
                    }
                }

                if (j + 1 < n) {
                    let currCost = 0;
                    if (grid[i][j + 1] === 1 || grid[i][j + 1] === 2) {
                        currCost++;
                    }
                    if (c + currCost <= k) {
                        dp[i][j + 1][c + currCost] = Math.max(dp[i][j + 1][c + currCost], dp[i][j][c] + grid[i][j + 1]);
                    }
                }
            }
        }
    }

    let ans = -1;

    for (let c = 0; c <= k; c++) {
        ans = Math.max(ans, dp[m - 1][n - 1][c]);
    }

    return ans;
};