// https://leetcode.com/problems/binary-number-with-alternating-bits/

var hasAlternatingBits = function(n) {
    let binary = n.toString(2);
    for (let i = 0; i < binary.length-1; i++) {
        if (binary[i] == binary[i+1]) {
            return false;
        }
    }
    return true;
};