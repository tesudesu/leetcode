// https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/

var minOperations = function(nums) {
    let tot = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            tot++;
            if (i + 1 < nums.length) {
                if (nums[i + 1] === 0) {
                    nums[i + 1] = 1;
                } else {
                    nums[i + 1] = 0;
                }
            }
            if (i + 2 < nums.length) {
                if (nums[i + 2] === 0) {
                    nums[i + 2] = 1;
                } else {
                    nums[i + 2] = 0;
                }
            }
        }
    }

    if (nums[nums.length - 2] === 1 && nums[nums.length - 1] === 1) {
        return tot;
    }

    return -1;
};