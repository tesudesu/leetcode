// https://leetcode.com/problems/valid-palindrome-ii/

var validPalindrome = function(s) {
    const length = s.length;
    const mid = Math.floor(length/2);
    let count = 0;
    for (let i = 0; i < mid; i++) {
        if (s[i] != s[length-1-i]) {
            for (let j = i; j < mid; j++) {
                if (s[j+1] != s[length-1-j]) {
                    count++;
                    break;
                }
            }
            for (let j = i; j < mid; j++) {
                if (s[j] != s[length-2-j]) {
                    count++;
                    break;
                }
            }
            return count != 2;
        }
    }
    return true;
};