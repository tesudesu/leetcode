// https://leetcode.com/problems/semi-ordered-permutation/

var semiOrderedPermutation = function(nums) {
    const indOne = nums.indexOf(1);
    const indN = nums.indexOf(nums.length);

    if (indOne === 0 && indN === nums.length - 1) return 0;

    if (indN > indOne) {
        return indOne + nums.length - 1 - indN;
    } else {
        return indOne + nums.length - 2 - indN;
    }
};