// https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/

var appendCharacters = function(s, t) {
    let j = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === t[j]) {
            j++;
        }
        if (j === t.length) {
            break;
        }
    }

    return t.length - j;
};