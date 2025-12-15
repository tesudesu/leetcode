// https://leetcode.com/problems/repeated-string-match/

var repeatedStringMatch = function(a, b) {
    let tot = 1;
    let repeated = a;

    while (repeated.length < b.length + a.length + a.length) {
        if (repeated.includes(b)) {
            return tot;
        }
        repeated += a;
        tot++;
    }

    return -1;
};