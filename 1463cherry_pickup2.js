// https://leetcode.com/problems/cherry-pickup-ii/

// Bottom-up DP

var cherryPickup = function(grid) {
    const n = grid.length;
    const m = grid[0].length;

    let prev = Array(m).fill().map(() => Array(m).fill(0));

    let i = n - 1;

    while (i >= 0) {
        let curr = Array(m).fill().map(() => Array(m).fill(0));
        for (let j = 0; j < m; j++) {
            for (let k = 0; k < m; k++) {
                if (j === k) continue;
                curr[j][k] = prev[j][k];
                if (j - 1 >= 0) {
                    curr[j][k] = Math.max(curr[j][k], prev[j - 1][k]);
                    if (k - 1 >= 0) {
                        curr[j][k] = Math.max(curr[j][k], prev[j - 1][k - 1], prev[j][k - 1]);
                    }
                    if (k + 1 < m) {
                        curr[j][k] = Math.max(curr[j][k], prev[j - 1][k + 1], prev[j][k + 1]);
                    }
                } else {
                    if (k - 1 >= 0) {
                        curr[j][k] = Math.max(curr[j][k], prev[j][k - 1]);
                    }
                    if (k + 1 < m) {
                        curr[j][k] = Math.max(curr[j][k], prev[j][k + 1]);
                    }
                }

                if (j + 1 < m) {
                    curr[j][k] = Math.max(curr[j][k], prev[j + 1][k]);
                    if (k - 1 >= 0) {
                        curr[j][k] = Math.max(curr[j][k], prev[j + 1][k - 1]);
                    }
                    if (k + 1 < m) {
                        curr[j][k] = Math.max(curr[j][k], prev[j + 1][k + 1]);
                    }
                } else {
                    if (k - 1 >= 0) {
                        curr[j][k] = Math.max(curr[j][k], prev[j][k - 1]);
                    }
                    if (k + 1 < m) {
                        curr[j][k] = Math.max(curr[j][k], prev[j][k + 1]);
                    }
                }

                curr[j][k] += grid[i][j] + grid[i][k];
            }
        }
        prev = curr;
        i--;
    }

    return prev[0][m - 1];
};


// Top-down DP

var cherryPickup = function(grid) {
    const n = grid.length;
    const m = grid[0].length;

    const cache = Array(n).fill().map(() => Array(m).fill().map(() => Array(m).fill(-1)));

    const dp = (i, j, k) => {
        if (i === n) return 0;
        if (j < 0 || j === m || k < 0 || k === m) return 0;
        if (j === k) return -Infinity;

        if (cache[i][j][k] !== -1) {
            return cache[i][j][k];
        }

        const ans = grid[i][j] + grid[i][k] + Math.max(dp(i + 1, j - 1, k), dp(i + 1, j, k), dp(i + 1, j + 1, k), dp(i + 1, j - 1, k - 1), dp(i + 1, j, k - 1), dp(i + 1, j + 1, k - 1), dp(i + 1, j - 1, k + 1), dp(i + 1, j, k + 1), dp(i + 1, j + 1, k + 1));

        cache[i][j][k] = ans;

        return ans;
    }

    return dp(0, 0, m - 1);
};