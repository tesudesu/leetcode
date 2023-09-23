// https://leetcode.com/problems/palindromic-substrings/

var countSubstrings = function(s) {
    let tot = 0;

    for (let i = 0; i < s.length; i++) {
        // odd substrings
        let left = i;
        let right = i;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            tot++;
            left--;
            right++;
        }

        // even substrings
        left = i;
        right = i + 1;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            tot++;
            left--;
            right++;
        }
    }

    return tot;
};