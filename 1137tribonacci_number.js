// https://leetcode.com/problems/n-th-tribonacci-number/

var tribonacci = function(n) {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    let one = 0;
    let two = 1;
    let three = 1;

    for (let i = 3; i <= n; i++) {
        let temp = three;
        three = three + two + one;
        one = two;
        two = temp;
    }

    return three;
};

// var tribonacci = function(n) {
//     let cache = new Map();
//     cache.set(0, 0);
//     cache.set(1, 1);
//     cache.set(2, 1);

//     const dp = (num) => {
//         if (cache.has(num)) {
//             return cache.get(num);
//         } else {
//             const res = dp(num-1) + dp(num-2) + dp(num-3);
//             cache.set(num, res);
//             return res;
//         }
//     }

//     return dp(n);
// };