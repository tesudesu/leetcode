// https://leetcode.com/problems/counter/

var createCounter = function(n) {
    let count = n;
    return function() {
        count++;
        return count-1;
    };
};