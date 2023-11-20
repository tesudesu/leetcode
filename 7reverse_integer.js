// https://leetcode.com/problems/reverse-integer/

var reverse = function(x) {
    let upperLimit = Math.pow(2, 31) - 1;
    let lowerLimit = Math.pow(-2, 31);
    let reversed = 0;

    while (x !== 0) {
        const last = x % 10;
        reversed = reversed * 10 + last;
        x = Math.trunc(x / 10);
        if (x !== 0 && (reversed > Math.trunc(upperLimit / 10) || reversed < Math.trunc(lowerLimit / 10))) {
            return 0;
        }
        if (reversed === Math.trunc(upperLimit / 10) && x > 7 || reversed === Math.trunc(lowerLimit / 10) && x < -8) {
            return 0;
        }
    }

    return reversed;
};