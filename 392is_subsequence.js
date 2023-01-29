// https://leetcode.com/problems/is-subsequence/

var isSubsequence = function(s, t) {
    let ind = -1;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = ind + 1; j < t.length; j++) {
            if (s[i] == t[j]) {
                ind = j;
                count++;
                break;
            }
        }
        if (count != i + 1) return false;
    }
    return true;
};