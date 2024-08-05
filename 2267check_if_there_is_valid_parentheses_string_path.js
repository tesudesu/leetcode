// https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/

var hasValidPath = function(grid) {
    const n = grid.length;
    const m = grid[0].length;

    if (grid[n - 1][m - 1] === "(") return false;

    const dp = Array(n).fill().map(() => Array(m).fill());
    dp[n - 1][m - 1] = new Set([1]);

    for (let j = m - 2; j >= 0; j--) {
        const set = new Set();
        const prev = dp[n - 1][j + 1];
        if (grid[n - 1][j] === ")") {
            for (const num of prev) {
                set.add(num + 1);
            }
        } else {
            for (const num of prev) {
                if (num - 1 >= 0) {
                    set.add(num - 1);
                }
            }
        }
        dp[n - 1][j] = set;
    }

    for (let i = n - 2; i >= 0; i--) {
        const set = new Set();
        const prev = dp[i + 1][m - 1];
        if (grid[i][m - 1] === ")") {
            for (const num of prev) {
                set.add(num + 1);
            }
        } else {
            for (const num of prev) {
                if (num - 1 >= 0) {
                    set.add(num - 1);
                }
            }
        }
        dp[i][m - 1] = set;
    }

    for (let i = n - 2; i >= 0; i--) {
        for (let j = m - 2; j >= 0; j--) {
            const set = new Set();
            const right = dp[i][j + 1];
            const down = dp[i + 1][j];
            if (grid[i][j] === ")") {
                for (const num of right) {
                    set.add(num + 1);
                }
                for (const num of down) {
                    set.add(num + 1);
                }
            } else {
                for (const num of right) {
                    if (num - 1 >= 0) {
                        set.add(num - 1);
                    }
                }
                for (const num of down) {
                    if (num - 1 >= 0) {
                        set.add(num - 1);
                    }
                }
            }
            dp[i][j] = set;
        }
    }

    return dp[0][0].has(0);
};