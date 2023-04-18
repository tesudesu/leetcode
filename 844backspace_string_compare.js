// https://leetcode.com/problems/backspace-string-compare/

var backspaceCompare = function(s, t) {
    let sCopy = [];
    let tCopy = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '#') {
            sCopy.push(s[i]);
        } else {
            sCopy.pop();
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (t[i] !== '#') {
            tCopy.push(t[i]);
        } else {
            tCopy.pop();
        }
    }
    return sCopy.join('') == tCopy.join('');
};