// https://leetcode.com/problems/painting-the-walls/

// Top down DP

var paintWalls = function(cost, time) {
    let cache = Array(cost.length).fill().map(() => Array(cost.length + 1).fill());

    const dp = (i, walls) => {
        if (walls <= 0) return 0;
        if (i >= cost.length) return Infinity;

        if (cache[i][walls]) return cache[i][walls];

        const paint = cost[i] + dp(i + 1, walls - 1 - time[i]);
        const notPaint = dp(i + 1, walls);

        cache[i][walls] = Math.min(paint, notPaint);
        return cache[i][walls];
    }

    return dp(0, cost.length);
};


// Bottom up DP

// var paintWalls = function(cost, time) {
//     // dp[i][j] = starting from index i, min cost to paint j walls
//     let n = cost.length;
//     let dp = Array(n + 1).fill().map(() => Array(n + 1).fill());

//     for (let i = 1; i < dp[0].length; i++) {
//         dp[dp.length - 1][i] = Infinity;
//     }

//     for (let i = 0; i < dp.length; i++) {
//         dp[i][0] = 0;
//     }

//    for (let i = dp.length - 2; i >= 0; i--) {
//         for (let j = 1; j < dp[0].length; j++) {
//             const paint = cost[i] + dp[i + 1][Math.max(0, j - time[i] - 1)];
//             const notPaint = dp[i + 1][j];

//             dp[i][j] = Math.min(paint, notPaint);
//         }
//    }

//     return dp[0][n];
// };


// var paintWalls = function(cost, time) {
//     let n = cost.length;
//     let dp = Array(n).fill().map(() => Array(n + 1).fill());

//     for (let i = 1; i < dp[0].length; i++) {
//         if (i <= time[0] + 1) {
//             dp[0][i] = cost[0];
//         } else {
//             dp[0][i] = Infinity;
//         }
//     }

//     for (let i = 0; i < dp.length; i++) {
//         dp[i][0] = 0;
//     }

//     for (let i = 1; i < dp.length; i++) {
//         for (let j = 1; j < dp[0].length; j++) {
//             const paint = cost[i] + dp[i - 1][Math.max(0, j - time[i] - 1)];
//             const notPaint = dp[i - 1][j];

//             dp[i][j] = Math.min(paint, notPaint);
//         }
//     }

//     return dp[dp.length - 1][n];
// };