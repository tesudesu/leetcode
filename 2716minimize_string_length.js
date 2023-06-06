// https://leetcode.com/problems/minimize-string-length/

var minimizedStringLength = function(s) {
    return new Set(s).size;
};