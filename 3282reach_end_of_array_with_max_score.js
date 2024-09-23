// https://leetcode.com/problems/reach-end-of-array-with-max-score/

var findMaximumScore = function(nums) {
    let tot = 0;
    let max = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
        tot += max;
    }

    return tot;
};