// https://leetcode.com/problems/power-of-two/

var isPowerOfTwo = function(n) {
    if (n == 1) {
        return true;
    }
    let x = 2;
    while (x * 2 <= n) {
        x = x * 2;
    }
    return !!(x == n);
};
