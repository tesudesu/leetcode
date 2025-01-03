// https://leetcode.com/problems/construct-the-longest-new-string/

var longestString = function(x, y, z) {
    if (y === x) {
        return (x + y + z) * 2;
    } else {
        return (Math.min(x, y) * 2 + 1 + z) * 2;
    }
};