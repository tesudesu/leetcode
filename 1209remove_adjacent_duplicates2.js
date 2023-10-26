// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/

var removeDuplicates = function (s, k) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (stack.length === 0 || s[i] !== stack[stack.length - 1][0]) {
            stack.push([s[i], 1]);
        } else {
            stack.push([s[i], stack[stack.length - 1][1] + 1]);
            if (stack[stack.length - 1][1] === k) {
                for (let j = 0; j < k; j++) {
                    stack.pop();
                }
            }
        }
    }

    let res = "";
    for (let i = 0; i < stack.length; i++) {
        res += stack[i][0];
    }

    return res;
};