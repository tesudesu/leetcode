// https://leetcode.com/problems/sqrtx/

var mySqrt = function(x) {
    for (let i = 0; i <= x; i++) {
        if (i*i == x) {
            return i;
        } else if (i*i > x) {
            return i - 1;
        }
    }
};


