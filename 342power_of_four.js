// https://leetcode.com/problems/power-of-four/

var isPowerOfFour = function(n) {
    let num = 1;

    while (num <= n) {
        if (num === n) return true;
        num *= 4;
    }

    return false;
};