// https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/

var minimumAverage = function(nums) {
    let min = Infinity;

    nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const avg = (nums[left] + nums[right]) / 2;
        min = Math.min(min, avg);
        left++;
        right--;
    }

    return min;
};