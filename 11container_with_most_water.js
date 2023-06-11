// https://leetcode.com/problems/container-with-most-water/

var maxArea = function(height) {
    let start = 0;
    let end = height.length - 1;

    let max = 0;

    let i = 1;
    while (start < end) {
        const curr = Math.min(height[start], height[end]) * (height.length - i);
        max = Math.max(curr, max);
        if (height[start] <= height[end]) {
            start++;
        } else {
            end--;
        }
        i++;
    }

    return max;
};