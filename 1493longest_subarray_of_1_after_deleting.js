// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/

var longestSubarray = function(nums) {
    let left = 0;
    let right = 0;
    let zeroleft = 1;

    while (right < nums.length) {
        if (nums[right] === 0) {
            zeroleft--;
        }

        if (zeroleft < 0) {
            if (nums[left] === 0) zeroleft++;
            left++;
        }
        right++;
    }

    return right - left - 1;
};