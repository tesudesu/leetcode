// https://leetcode.com/problems/longest-uncommon-subsequence-i/

var findLUSlength = function(a, b) {
    if (a != b) {
        return Math.max(a.length, b.length);
    } else {
        return -1;
    }
};