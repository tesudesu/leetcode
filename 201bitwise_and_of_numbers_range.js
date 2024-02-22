// https://leetcode.com/problems/bitwise-and-of-numbers-range/

var rangeBitwiseAnd = function(left, right) {
    let leftString = left.toString(2);
    let rightString = right.toString(2);

    let ans = 0;

    while (left > 0 && leftString.length === rightString.length) {
        const rightMost = Math.pow(2, leftString.length - 1);
        ans += rightMost;
        left -= rightMost;
        leftString = left.toString(2);
        right -= rightMost;
        rightString = right.toString(2);
    }

    return ans;
};


var rangeBitwiseAnd = function(left, right) {
    let shifts = 0;

    while (left !== right) {
        left = left >> 1;
        right = right >> 1;
        shifts++;
    }

    return left << shifts;
};