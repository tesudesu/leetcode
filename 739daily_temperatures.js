// https://leetcode.com/problems/daily-temperatures/

var dailyTemperatures = function(temperatures) {
    let stack = [];

    const ans = Array(temperatures.length).fill(0);

    for (let i = temperatures.length - 1; i >= 0; i--) {
        while (stack.length > 0 && temperatures[i] >= stack[stack.length - 1][0]) {
            stack.pop();
        }
        if (stack.length > 0) {
            ans[i] = stack[stack.length - 1][1] - i;
        }
        stack.push([temperatures[i], i]);
    }

    return ans;
};


// var dailyTemperatures = function (temperatures) {
//     let ans = Array(temperatures.length).fill(0);

//     let stack = [[temperatures[0], 0]];

//     for (let i = 1; i < temperatures.length; i++) {
//         let j = stack.length - 1;
//         while (stack.length > 0 && temperatures[i] > stack[j][0]) {
//             ans[stack[j][1]] = i - stack[j][1];
//             stack.pop();
//             j--;
//         }
//         stack.push([temperatures[i], i]);
//     }
//     return ans;
// };