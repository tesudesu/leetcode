// https://leetcode.com/problems/minimum-falling-path-sum/

// Top-down DP

var minFallingPathSum = function(matrix) {
    const cache = Array(matrix.length).fill().map(() => Array(matrix[0].length).fill());

    const dfs = (row, col) => {
        if (row === matrix.length) {
            return 0;
        }

        if (cache[row][col] !== undefined) {
            return cache[row][col];
        }

        let left = Infinity;
        if (col - 1 >= 0) {
            left = dfs(row + 1, col - 1);
        }

        let center = dfs(row + 1, col);

        let right = Infinity;
        if (col + 1 < matrix[0].length) {
            right = dfs(row + 1, col + 1);
        }

        const res = matrix[row][col] + Math.min(left, center, right);
        cache[row][col] = res;

        return res;
    }

    let ans = Infinity;

    for (let i = 0; i < matrix[0].length; i++) {
        ans = Math.min(ans, dfs(0, i));
    }

    return ans;
};


// Bottom-up DP

var minFallingPathSum = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    const dp = Array(m).fill().map(() => Array(n).fill());

    for (let i = 0; i < n; i++) {
        dp[m - 1][i] = matrix[m - 1][i];
    }

    for (let i = m - 2; i >= 0; i--) {
        for (let j = 0; j < n; j++) {

            let left = Infinity;
            if (j - 1 >= 0) {
                left = dp[i + 1][j - 1];
            }
            const center = dp[i + 1][j];
            let right = Infinity;
            if (j + 1 < n) {
                right = dp[i + 1][j + 1];
            }

            dp[i][j] = matrix[i][j] + Math.min(left, center, right);
        }
    }

    return Math.min(...dp[0]);
};