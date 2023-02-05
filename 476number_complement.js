// https://leetcode.com/problems/number-complement/

var findComplement = function(num) {
    let str = num.toString(2);
    let complement = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 1) {
            complement += '0';
        } else {
            complement += '1';
        }
    }
    return parseInt(complement, 2);
};