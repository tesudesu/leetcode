// https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/

var isMajorityElement = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let tar = target - 1;

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);

        if (nums[mid] > tar) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    let left = start;

    start = 0; 
    end = nums.length - 1;
    tar = target + 1;

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);

        if (nums[mid] >= tar) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    let right = start;

    return right - left > Math.floor(nums.length / 2);
};