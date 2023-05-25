// https://leetcode.com/problems/climbing-stairs/

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