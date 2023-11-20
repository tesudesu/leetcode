// https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/

var minInsertions = function(s) {
    let need = 0;
    let stack = [];

    let i = 0;

    while (i < s.length) {
        if (s[i] === "(") {
            stack.push(s[i]);
            i++;
        } else {
            if (stack.length > 0) {
                stack.pop();
            } else {
                need++;
            }
            if (i < s.length - 1 && s[i + 1] === ")") {
                i += 2;
            } else {
                need++;
                i++;
            }
        }
    }

    return need + stack.length * 2;
};