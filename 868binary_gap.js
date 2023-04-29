// https://leetcode.com/problems/binary-gap/

var binaryGap = function(n) {
    const binary = n.toString(2);
    let start = -1;
    let max = 0;
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '1') {
            if (start !== -1) {
                max = Math.max(max, i - start)
            }
            start = i;
        }
    }
    return max;
};