// https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k/

var minOperations = function(nums, k) {
    let min = Math.min(...nums);
    if (k > min) return -1;

    let set = new Set(nums);
    set = [...set];
    set.sort((a, b) => b - a);

    let tot = 0;

    let i = 0;

    while (i < set.length && set[i] > k) {
        tot++;
        i++;
    }

    return tot;
};