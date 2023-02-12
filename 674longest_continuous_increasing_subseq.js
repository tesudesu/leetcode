// https://leetcode.com/problems/longest-continuous-increasing-subsequence/

var findLengthOfLCIS = function(nums) {
    let currLength = 1;
    let max = 0;
    for (let i = 1; i <= nums.length; i++) {
        if (nums[i] > nums[i-1]) {
            currLength++;
        } else {
            max = Math.max(currLength, max);
            currLength = 1;
        }
    }
    return max;
};