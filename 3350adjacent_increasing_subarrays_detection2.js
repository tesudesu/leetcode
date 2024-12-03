// https://leetcode.com/problems/adjacent-increasing-subarrays-detection-ii/

var maxIncreasingSubarrays = function(nums) {
    let counts = [];
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            count++;
        } else {
            counts.push(count);
            count = 1;
        }
    }

    counts.push(count);

    let max = Math.max(1, Math.floor(counts[0] / 2));

    for (let i = 1; i < counts.length; i++) {
        max = Math.max(max, Math.min(counts[i], counts[i - 1]), Math.floor(counts[i] / 2));
    }

    return max;
};