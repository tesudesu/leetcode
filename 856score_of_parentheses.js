// https://leetcode.com/problems/score-of-parentheses/

var scoreOfParentheses = function(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push("(");
        } else {
            let count = 0;
            while (stack[stack.length - 1] !== "(") {
                count += stack.pop();
            }
            stack.pop();
            if (count === 0) {
                stack.push(1);
            } else {
                stack.push(2 * count);
            }
        }
    }

    let tot = 0;

    for (let i = 0; i < stack.length; i++) {
        tot += stack[i];
    }

    return tot;
};