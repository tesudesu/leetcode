// https://leetcode.com/problems/lexicographically-smallest-palindrome/

var makeSmallestPalindrome = function(s) {
    let i = 0;
    let arr = s.split('');

    while (i <= Math.floor(s.length/2) - 1) {
        if (s[i] !== s[s.length-1-i]) {
            if (s.charCodeAt(i) < s.charCodeAt(s.length-1-i)) {
                arr[s.length-1-i] = s[i];
            } else {
                arr[i] = s[s.length-1-i];
            }
        }
        i++;
    }
    return arr.join('');
};