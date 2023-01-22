// https://leetcode.com/problems/reverse-string/

var reverseString = function(s) {
    const length = s.length;
    for (let i = length - 2; i >= 0; i--) {
        s.push(s[i]);
    }
    s.splice(0, length - 1);
};