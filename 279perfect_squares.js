// https://leetcode.com/problems/perfect-squares/

var numSquares = function(n) {
    let dp = Array(n + 1).fill(Infinity);
    dp[0] = 0;
    
    let i = 1;
    while (i * i <= n) {
        dp[i * i] = 1;
        i++;
    }

    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= Math.floor(i / 2); j++) {
            dp[i] = Math.min(dp[i], dp[j] + dp[i - j]);
        }
    }

    return dp[n];
};