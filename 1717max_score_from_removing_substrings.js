// https://leetcode.com/problems/maximum-score-from-removing-substrings/

var maximumGain = function(s, x, y) {
    let stack = [];
    let tot = 0;

    for (let i = 0; i < s.length; i++) {
        if (x >= y) {
            if (s[i] === "b" && stack.length > 0 && stack[stack.length - 1] === "a") {
                tot += x;
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        } else if (y >= x) {
            if (s[i] === "a" && stack.length > 0 && stack[stack.length - 1] === "b") {
                tot += y;
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        }
    }

    let stack2 = [];

    for (let i = 0; i < stack.length; i++) {
        if (x < y) {
            if (stack[i] === "b" && stack2.length > 0 && stack2[stack2.length - 1] === "a") {
                tot += x;
                stack2.pop();
            } else {
                stack2.push(stack[i]);
            }
        } else if (y < x) {
            if (stack[i] === "a" && stack2.length > 0 && stack2[stack2.length - 1] === "b") {
                tot += y;
                stack2.pop();
            } else {
                stack2.push(stack[i]);
            }
        }
    }

    return tot;
};