// https://leetcode.com/problems/dungeon-game/

var calculateMinimumHP = function(dungeon) {
    const n = dungeon.length;
    const m = dungeon[0].length;
    const dp = Array(n).fill().map(() => Array(m).fill());
    if (dungeon[n - 1][m - 1] >= 0) {
        dp[n - 1][m - 1] = 1;
    } else {
        dp[n - 1][m - 1] = -1 * dungeon[n - 1][m - 1] + 1;
    }
    
    for (let j = m - 2; j >= 0; j--) {
        dp[n - 1][j] = dp[n - 1][j + 1] - dungeon[n - 1][j];
        if (dp[n - 1][j] <= 0) {
            dp[n - 1][j] = 1;
        }
    }

    for (let i = n - 2; i >= 0; i--) {
        dp[i][m - 1] = dp[i + 1][m - 1] - dungeon[i][m - 1];
        if (dp[i][m - 1] <= 0) {
            dp[i][m - 1] = 1;
        }
    }

    for (let i = n - 2; i >= 0; i--) {
        for (let j = m - 2; j >= 0; j--) {
            dp[i][j] = Math.min(dp[i + 1][j] - dungeon[i][j], dp[i][j + 1] - dungeon[i][j]);
            if (dp[i][j] <= 0) {
                dp[i][j] = 1;
            }
        }
    }

    return dp[0][0];
};