// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

var findMin = function(nums) {
    let min = nums[0];

    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (nums[mid] >= nums[0]) {
            start = mid + 1;
        } else {
            min = nums[mid];
            end = mid - 1;
        }
    }

    return min;
};