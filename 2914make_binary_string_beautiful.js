// https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/

var minChanges = function(s) {
    let tot = 0;

    for (let i = 1; i < s.length; i += 2) {
        if (s[i] !== s[i - 1]) tot++;
    }

    return tot;
};