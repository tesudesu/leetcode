// https://leetcode.com/problems/valid-parentheses/

var isValid = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == ')') {
            if (stack[stack.length-1] == '(') {
                stack.pop();
                continue;
            }
        }
        if (s[i] == ']') {
            if (stack[stack.length-1] == '[') {
                stack.pop();
                continue;
            }
        } 
        if (s[i] == '}') {
            if (stack[stack.length-1] == '{') {
                stack.pop();
                continue;
            }
        }
        stack.push(s[i]);
    }
    return stack.length == 0;
};