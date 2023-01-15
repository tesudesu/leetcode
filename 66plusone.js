// https://leetcode.com/problems/plus-one/

var plusOne = function(digits) {
    const num = BigInt(digits.join('')) + BigInt(1);
    const string = num.toString();
    let result = [];
    for (let i = 0; i < string.length; i++) {
        result[i] = Number(string[i]);
    }
    return result;
};