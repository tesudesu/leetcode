// https://leetcode.com/problems/palindrome-permutation/

var canPermutePalindrome = function(s) {
    let counts = {};
    for (let i = 0; i < s.length; i++) {
        counts[s[i]] = (counts[s[i]] + 1) || 1;
    }
    let odd = false;
    for (const letter in counts) {
        if (counts[letter] % 2 !== 0) {
            if (odd) {
                return false;
            } else {
                odd = true;
            }
        }
    }
    return true;
};