// https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k/

var numberOfPaths = function(grid, k) {
    const n = grid.length;
    const m = grid[0].length;
    const dp = Array(n).fill().map(() => Array(m).fill().map(() => Array(k + 1).fill(0)));
    dp[n - 1][m - 1][grid[n - 1][m - 1] % k]++;
    const mod = 1e9 + 7;

    for (let j = m - 2; j >= 0; j--) {
        for (let r = 0; r < k; r++) {
            if (dp[n - 1][j + 1][r] === 0) continue;
            const remainder = (r + grid[n - 1][j]) % k;
            dp[n - 1][j][remainder] = (dp[n - 1][j][remainder] + dp[n - 1][j + 1][r]) % mod;
        }
    }

    for (let i = n - 2; i >= 0; i--) {
        for (let r = 0; r < k; r++) {
            if (dp[i + 1][m - 1][r] === 0) continue;
            const remainder = (r + grid[i][m - 1]) % k;
            dp[i][m - 1][remainder] = (dp[i][m - 1][remainder] + dp[i + 1][m - 1][r]) % mod;
        }
    }

    for (let i = n - 2; i >= 0; i--) {
        for (let j = m - 2; j >= 0; j--) {
            for (let r = 0; r < k; r++) {
                if (dp[i][j + 1][r] !== 0) {
                    const remainder = (r + grid[i][j]) % k;
                    dp[i][j][remainder] = (dp[i][j][remainder] + dp[i][j + 1][r]) % mod;
                }
                if (dp[i + 1][j][r] !== 0) {
                    const remainder = (r + grid[i][j]) % k;
                    dp[i][j][remainder] = (dp[i][j][remainder] + dp[i + 1][j][r]) % mod;
                } 
            }
        }
    }

    return dp[0][0][0];
};