// https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/

var differenceOfSums = function(n, m) {
    let num1 = 0;
    let num2 = 0;

    for (let i = 1; i <= n; i++) {
        if (i % m !== 0) {
            num1 += i;
        } else {
            num2 += i;
        }
    }

    return num1 - num2;
};