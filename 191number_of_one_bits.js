// https://leetcode.com/problems/number-of-1-bits/

var hammingWeight = function(n) {
    let tot = 0;

    while (n > 0) {
        if (n & 1 === 1) {
            tot++;
        }

        n = n >>> 1;
    }

    return tot;
};