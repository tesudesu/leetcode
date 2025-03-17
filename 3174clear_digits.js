// https://leetcode.com/problems/clear-digits/

var clearDigits = function(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
            stack.push(s[i]);
        } else {
            stack.pop();
        }
    }

    return stack.join("");
};