// https://leetcode.com/problems/power-of-three/

var isPowerOfThree = function(n) {
    if (n == 1) {
        return true;
    }
    if (n <= 0) {
        return false;
    }
    let x = 3;
    while (x * 3 <= n) {
        x = x * 3;
    }
    return x == n;
};
