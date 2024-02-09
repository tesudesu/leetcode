// https://leetcode.com/problems/number-of-changing-keys/

var countKeyChanges = function(s) {
    s = s.toLowerCase();
    let count = 0;

    for (let i = 1; i < s.length; i++) {
        if (s[i] !== s[i - 1]) {
            count++;
        }
    }

    return count;
};