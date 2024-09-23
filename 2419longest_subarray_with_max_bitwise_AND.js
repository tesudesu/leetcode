// https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/

var longestSubarray = function(nums) {
    let max = nums[0];
    let maxLength = 1;
    let currLength = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
            maxLength = 1;
            currLength = 1;
        } else if (nums[i] === max) {
            currLength++;
        } else {
            maxLength = Math.max(maxLength, currLength);
            currLength = 0;
        }
    }

    maxLength = Math.max(maxLength, currLength);

    return maxLength;
};