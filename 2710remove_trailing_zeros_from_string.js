// https://leetcode.com/problems/remove-trailing-zeros-from-a-string/

var removeTrailingZeros = function(num) {
    return num.replace(/0+$/, '');
};