// https://leetcode.com/problems/find-peak-element/

var findPeakElement = function(nums) {
    nums.unshift(-Infinity);
    nums.push(-Infinity);
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((end - start)/2) + start;

        if (nums[mid] > nums[mid-1] && nums[mid] > nums[mid+1]) {
            return mid-1;
        }

        if (nums[mid] < nums[mid-1]) {
            end = mid - 1;
        } else if (nums[mid] < nums[mid+1]) {
            start = mid + 1;
        }
    }
};