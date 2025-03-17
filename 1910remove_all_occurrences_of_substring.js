// https://leetcode.com/problems/remove-all-occurrences-of-a-substring/

var removeOccurrences = function(s, part) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);
        if (stack.length >= part.length) {
            let match = true;
            for (let j = 0; j < part.length; j++) {
                if (stack[stack.length - part.length + j] !== part[j]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                for (let j = 0; j < part.length; j++) {
                    stack.pop();
                }
            }
        }
    }

    return stack.join("");
};