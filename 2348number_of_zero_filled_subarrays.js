// https://leetcode.com/problems/number-of-zero-filled-subarrays/

var zeroFilledSubarray = function(nums) {
    let tot = 0;

    let left = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            tot += ((i - left) * (i - left - 1)) / 2;
            left = i;
        }
    }

    if (left !== nums.length - 1) {
        tot += ((nums.length - left) * (nums.length - left - 1)) / 2;
    }

    return tot;
};