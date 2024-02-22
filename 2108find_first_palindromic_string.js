// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/

var firstPalindrome = function(words) {
    const isPalindrome = (str) => {
        for (let i = 0; i < Math.floor(str.length / 2); i++) {
            if (str[i] !== str[str.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }

    for (let i = 0; i < words.length; i++) {
        if (isPalindrome(words[i])) {
            return words[i];
        }
    }

    return "";
};

