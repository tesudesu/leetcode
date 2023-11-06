// https://leetcode.com/problems/confusing-number/

var confusingNumber = function(n) {
    let num = n;
    let reversed = 0;
    while (num > 0) {
        let digit = num % 10;
        num = Math.floor(num / 10);
        if (digit === 0 || digit === 1 || digit === 8) {
            reversed = (reversed * 10) + digit;
        } else if (digit === 6) {
            reversed = (reversed * 10) + 9;
        } else if (digit === 9) {
            reversed = (reversed * 10) + 6;
        } else {
            return false;
        }
    }

    return reversed !== n;
};