// https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/

var check = function(nums) {
    let last;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            if (last == undefined) {
                last = i - 1;
            } else {
                return false;
            }
        }
    }

    return last === undefined || nums[nums.length - 1] <= nums[0];
};