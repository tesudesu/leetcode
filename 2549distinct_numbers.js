// https://leetcode.com/problems/count-distinct-numbers-on-board/

var distinctIntegers = function(n) {
    if (n === 2 || n === 1) {
        return 1;
    } else {
        return n - 1;
    }
};