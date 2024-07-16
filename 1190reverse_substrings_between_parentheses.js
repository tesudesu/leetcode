// https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/

var reverseParentheses = function(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ")") {
            let temp = [];
            while (stack[stack.length - 1] !== "(") {
                temp.push(stack.pop());
            }
            stack.pop();
            for (let j = 0; j < temp.length; j++) {
                stack.push(temp[j]);
            }
        } else {
            stack.push(s[i]);
        }
    }

    return stack.join("");
};