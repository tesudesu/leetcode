// https://leetcode.com/problems/climbing-stairs/

// Top-down DP

var climbStairs = function(n) {
    const cache = Array(n + 1).fill(-1);

    const dp = (i) => {
        if (i === n - 1) {
            return 2;
        } else if (i === n) {
            return 1;
        } 

        if (cache[i] !== -1) {
            return cache[i];
        }

        const ans = dp(i + 1) + dp(i + 2);
        cache[i] = ans;

        return ans;
    }

    return dp(1);
};


// Bottom-up DP

var climbStairs = function(n) {
    const dp = Array(n + 1).fill(0);
    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i < dp.length; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
};


// Constant space

var climbStairs = function(n) {
    let one = 1;
    let two = 2;

    if (n === 1) return one;
    if (n === 2) return two;

    let temp;

    for (let i = 3; i <= n; i++) {
        temp = two;
        two = one + two;
        one = temp;
    }
    return two;
};


// var climbStairs = function(n) {
//     let stairs = [];
//     stairs[0] = 1;
//     stairs[1] = 2;
//     for (let i = 2; i <= n; i++) {
//         stairs[i] = stairs[i-1] + stairs[i-2];
//     }
//     return stairs[n-1];
// };


// var climbStairs = function(n) {
//     if (n === 1) return 1;
//     if (n === 2) return 2;
//     return climbStairs(n-1) + climbStairs(n-2);
// };