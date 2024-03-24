// https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/

var minOperations = function(k) {
    if (k === 1) {
        return 0;
    }

    let min = Infinity;
    
    for (let i = 1; i <= k; i++) {
        min = Math.min(min, i - 1 + Math.ceil(k / i) - 1);
    }

    return min;
};