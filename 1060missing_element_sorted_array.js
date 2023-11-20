// https://leetcode.com/problems/missing-element-in-sorted-array/

var missingElement = function(nums, k) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        const mid = Math.floor((end - start) / 2) + start;

        const missing = nums[mid] - (mid + nums[0]);

        if (k <= missing) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return nums[0] + k + end;
};