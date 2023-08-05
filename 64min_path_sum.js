// https://leetcode.com/problems/minimum-path-sum/

// O(1) space

var minPathSum = function(grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (i === 0 && j === 0) continue;
            if (i === 0) {
                grid[i][j] = grid[i][j - 1] + grid[i][j];
            } else if (j === 0) {
                grid[i][j] = grid[i - 1][j] + grid[i][j];
            } else {
                grid[i][j] = grid[i][j] + Math.min(grid[i - 1][j], grid[i][j - 1]);
            }

        }
    }

    return grid[grid.length - 1][grid[0].length - 1];
};


// O(n*m) space

// var minPathSum = function(grid) {
//     let dp = Array(grid.length).fill(0).map(row => Array(grid[0].length).fill(0));

//     dp[0][0] = grid[0][0];

//     for (let i = 0; i < dp.length; i++) {
//         for (let j = 0; j < dp[0].length; j++) {
//             if (i === 0 && j === 0) continue;
//             if (i === 0) {
//                 dp[i][j] = dp[i][j - 1] + grid[i][j];
//             } else if (j === 0) {
//                 dp[i][j] = dp[i - 1][j] + grid[i][j];
//             } else {
//                 dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
//             }

//         }
//     }

//     return dp[dp.length - 1][dp[0].length - 1];
// };