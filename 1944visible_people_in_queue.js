// https://leetcode.com/problems/number-of-visible-people-in-a-queue/

var canSeePersonsCount = function(heights) {
    let stack = [heights[heights.length - 1]];
    let ans = Array(heights.length).fill(0);

    for (let i = heights.length - 2; i >= 0; i--) {
        let count = 0;
        while (heights[i] > stack[stack.length - 1]) {
            stack.pop();
            count++;
        }
        if (stack.length > 0) {
            ans[i] = count + 1;
        } else {
            ans[i] = count;
        }
        stack.push(heights[i]);
    }

    return ans;
};