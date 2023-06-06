// https://leetcode.com/problems/daily-temperatures/

var dailyTemperatures = function (temperatures) {
    let ans = Array(temperatures.length).fill(0);

    let stack = [[temperatures[0], 0]];

    for (let i = 1; i < temperatures.length; i++) {
        let j = stack.length - 1;
        while (stack.length > 0 && temperatures[i] > stack[j][0]) {
            ans[stack[j][1]] = i - stack[j][1];
            stack.pop();
            j--;
        }
        stack.push([temperatures[i], i]);
    }
    return ans;
};