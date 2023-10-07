// https://leetcode.com/problems/integer-break/

// Bottom up dp

var integerBreak = function(n) {
    let dp = Array(n + 1).fill(1);
    
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= Math.floor(i / 2); j++) {
            dp[i] = Math.max(dp[i], j * (i - j));
            dp[i] = Math.max(dp[i], j * dp[i - j]);
        }
    }
    
    return dp[n];
};


// Top down dp

// var integerBreak = function(n) {
//     let cache = new Map();

//     const search = (num) => {
//         if (num === 1) {
//             return 1;
//         }
//         if (cache.has(num)) {
//             return cache.get(num);
//         }
//         let max = 0;

//         for (let i = 1; i <= Math.floor(num / 2); i++) {
//             max = Math.max(max, i * (num - i), i * search(num - i));
//         }

//         cache.set(num, max);
//         return max;
//     }

//     return search(n);
// };