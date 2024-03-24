// https://leetcode.com/problems/find-the-pivot-integer/

var pivotInteger = function(n) {
    const prefix = Array(n + 1).fill();

    let prefixSum = 0;
    for (let i = 1; i <= n; i++) {
        prefixSum += i;
        prefix[i] = prefixSum;
    }

    const suffix = Array(n + 1).fill();

    let suffixSum = 0;
    for (let i = n; i >= 1; i--) {
        suffixSum += i;
        suffix[i] = suffixSum;
    }

    for (let i = 1; i <= n; i++) {
        if (prefix[i] === suffix[i]) {
            return i;
        }
    }

    return -1;
};