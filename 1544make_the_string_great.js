// https://leetcode.com/problems/make-the-string-great/

var makeGood = function(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (stack.length > 0 && Math.abs(s.charCodeAt(i) - stack[stack.length - 1].charCodeAt(0)) === 32) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }

    return stack.join("");
};