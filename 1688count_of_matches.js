// https://leetcode.com/problems/count-of-matches-in-tournament/

var numberOfMatches = function(n) {
    return n - 1;
};


var numberOfMatches = function(n) {
    let tot = 0;
    while (n > 1) {
        tot += Math.floor(n / 2);
        n = Math.ceil(n / 2);
    }
    return tot;
};