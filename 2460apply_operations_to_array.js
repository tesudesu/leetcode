// https://leetcode.com/problems/apply-operations-to-an-array/

var applyOperations = function(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }

    let ans = Array(nums.length).fill(0);

    let j = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            ans[j] = nums[i];
            j++;
        }
    }

    return ans;
};