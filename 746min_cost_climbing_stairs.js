// https://leetcode.com/problems/min-cost-climbing-stairs/

var minCostClimbingStairs = function(cost) {
    const costLength = cost.length;
    let previoustwo = 0;
    let previous = cost[costLength-1];

    for (let i = costLength-2; i >= 0; i--) {
        const temp = previous;
        previous = cost[i] + Math.min(previoustwo, previous);
        previoustwo = temp;
    }

    return Math.min(previoustwo, previous);
};

// var minCostClimbingStairs = function(cost) {
//     const costLength = cost.length;
//     let dp = Array(costLength+1);
//     dp[costLength] = 0;
//     dp[costLength-1] = cost[costLength-1];

//     for (let i = costLength-2; i >= 0; i--) {
//         dp[i] = Math.min(dp[i+1], cost[i-1]);
//         dp[i] = cost[i] + Math.min(dp[i+1], dp[i+2]);
//     }

//     return Math.min(dp[0], dp[1]);
// };