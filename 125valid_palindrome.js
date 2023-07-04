// https://leetcode.com/problems/valid-palindrome/

var isPalindrome = function(s) {
    const cleansed = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    for (let i = 0; i < Math.floor(cleansed.length / 2); i++) {
        if (cleansed[i] !== cleansed[cleansed.length - 1 - i]) return false;
    }

    return true;   
};