// https://leetcode.com/problems/palindrome-number/

var isPalindrome = function(x) {
    const str = x.toString();
    let back = str.length - 1;
    for (let i = 0; i < str.length/2; i++) {
        if (str[i] !== str[back]) {
            return false;
        }
        back--;
    }
    return true;
};
