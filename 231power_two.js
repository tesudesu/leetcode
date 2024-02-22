// https://leetcode.com/problems/power-of-two/

var isPowerOfTwo = function(n) {
    if (n < 0) return false;

    let x = 1;
    while (x < n) {
        x *= 2;
    }

    return x === n;
};


var isPowerOfTwo = function(n) {
    if (n <= 0) return false;

    return (n & n - 1) === 0;
};