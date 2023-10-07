// https://leetcode.com/problems/largest-rectangle-in-histogram/

// Stack, O(n) time

var largestRectangleArea = function(heights) {
    let stack = [0];
    let maxHeight = 0;

    for (let i = 1; i < heights.length; i++) {
        while (heights[i] < heights[stack[stack.length - 1]]) {
            const curr = stack.pop();
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxHeight = Math.max(maxHeight, heights[curr] * width);
        }
        stack.push(i);
    }

    while (stack.length > 0) {
        const curr = stack.pop();
        const width = stack.length === 0 ? heights.length : heights.length - stack[stack.length - 1] - 1;
        maxHeight = Math.max(maxHeight, width * heights[curr]);
    }

    return maxHeight;
};


// Brute force, O(n^2) time

// var largestRectangleArea = function(heights) {
//     let ans = Math.max(...heights);

//     for (let i = 0; i < heights.length - 1; i++) {
//         let minHeight = heights[i];
//         for (let j = i + 1; j < heights.length; j++) {
//             minHeight = Math.min(minHeight, heights[j]);
//             ans = Math.max(ans, minHeight * (j - i + 1));
//         }
//     }

//     return ans;
// };