// https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/

var longestMonotonicSubarray = function(nums) {
    let ans = 1;
    let curr = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            curr++;
            ans = Math.max(ans, curr);
        } else {
            curr = 1;
        }
    }

    curr = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            curr++;
            ans = Math.max(ans, curr);
        } else {
            curr = 1;
        }
    }

    return ans;
};