// https://leetcode.com/problems/sum-multiples/

var sumOfMultiples = function(n) {
    let res = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
            res += i;
        }
    }
    return res;
};