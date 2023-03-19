// https://leetcode.com/problems/climbing-stairs/

var climbStairs = function(n) {
    let stairs = [];
    stairs[0] = 1;
    stairs[1] = 2;
    for (let i = 3; i <= n; i++) {
        stairs[i-1] = stairs[i-2] + stairs[i-3];
    }
    return stairs[n-1];
};

// var climbStairs = function(n) {
//     if (n === 1) return 1;
//     if (n === 2) return 2;
//     return climbStairs(n-1) + climbStairs(n-2);
// };