// https://leetcode.com/problems/number-of-paths-with-max-score/

var pathsWithMaxScore = function(board) {
    const n = board.length;
    const dp = Array(n).fill().map(() => Array(n).fill(0));
    const tot = Array(n).fill().map(() => Array(n).fill(1));
    dp[n - 1][n - 1] = 0;
    const mod = 1e9 + 7;

    for (let i = n - 2; i >= 0; i--) {
        if (board[i][n - 1] === "X") {
            dp[i][n - 1] = -Infinity;
            tot[i][n - 1] = -Infinity;
        } else {
            dp[i][n - 1] = dp[i + 1][n - 1] + Number(board[i][n - 1]);
        }

        if (board[n - 1][i] === "X") {
            dp[n - 1][i] = -Infinity;
            tot[n - 1][i] = -Infinity;
        } else {
            dp[n - 1][i] = dp[n - 1][i + 1] + Number(board[n - 1][i]);
        }
    }

    for (let i = n - 2; i >= 0; i--) {
        for (let j = n - 2; j >= 0; j--) {
            if (board[i][j] === "X") {
                dp[i][j] = -Infinity;
                tot[i][j] = -Infinity;
                continue;
            }

            const max = Math.max(dp[i + 1][j], dp[i][j + 1], dp[i + 1][j + 1]);
            dp[i][j] = max;
            let count = 0;
            if (dp[i + 1][j] === max) {
                count = (count + tot[i + 1][j]) % mod;
            }
            if (dp[i][j + 1] === max) {
                count = (count + tot[i][j + 1]) % mod;
            }
            if (dp[i + 1][j + 1] === max) {
                count = (count + tot[i + 1][j + 1]) % mod;
            }
            tot[i][j] = count;

            if (i !== 0 || j !== 0) {
                dp[i][j] += Number(board[i][j]);
            }
        }
    }

    if (dp[0][0] === -Infinity) {
        return [0, 0];
    } else {
        return [dp[0][0], tot[0][0]];
    }
};