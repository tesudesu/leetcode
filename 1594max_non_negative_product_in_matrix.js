// https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix/

var maxProductPath = function(grid) {
    const dp = Array(grid.length).fill().map(() => Array(grid[0].length).fill());
    dp[grid.length - 1][grid[0].length - 1] = [grid[grid.length - 1][grid[0].length - 1], grid[grid.length - 1][grid[0].length - 1]];

    for (let j = grid[0].length - 2; j >= 0; j--) {
        let maxNeg;
        let maxPos;
        let lastNeg = dp[grid.length - 1][j + 1][0];
        let lastPos = dp[grid.length - 1][j + 1][1];
        if (grid[grid.length - 1][j] >= 0) {
            maxNeg = grid[grid.length - 1][j] * lastNeg;
            maxPos = grid[grid.length - 1][j] * lastPos;
        } else {
            maxNeg = grid[grid.length - 1][j] * lastPos;
            maxPos = grid[grid.length - 1][j] * lastNeg;
        }
        dp[grid.length - 1][j] = [maxNeg, maxPos];
    }

    for (let i = grid.length - 2; i >= 0; i--) {
        let maxNeg;
        let maxPos;
        let lastNeg = dp[i + 1][grid[0].length - 1][0];
        let lastPos = dp[i + 1][grid[0].length - 1][1];
        if (grid[i][grid[0].length - 1] >= 0) {
            maxNeg = grid[i][grid[0].length - 1] * lastNeg;
            maxPos = grid[i][grid[0].length - 1] * lastPos;
        } else {
            maxNeg = grid[i][grid[0].length - 1] * lastPos;
            maxPos = grid[i][grid[0].length - 1] * lastNeg;
        }
        dp[i][grid[0].length - 1]  = [maxNeg, maxPos];
    }

    for (let i = grid.length - 2; i >= 0; i--) {
        for (let j = grid[0].length - 2; j >= 0; j--) {
            let maxNeg;
            let maxPos;
            if (grid[i][j] >= 0) {
                maxNeg = grid[i][j] * Math.min(dp[i + 1][j][0], dp[i][j + 1][0]);
                maxPos = grid[i][j] * Math.max(dp[i + 1][j][1], dp[i][j + 1][1]);
            } else {
                maxNeg = grid[i][j] * Math.max(dp[i + 1][j][1], dp[i][j + 1][1]);
                maxPos = grid[i][j] * Math.min(dp[i + 1][j][0], dp[i][j + 1][0]);
            }
            dp[i][j] = [maxNeg, maxPos];
        }
    } 
    
    return dp[0][0][1] >= 0 ? dp[0][0][1] % (1e9 + 7) : -1;
};