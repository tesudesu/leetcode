// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/

var maxDepth = function(s) {
    let open = 0;
    let max = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            open++;
            max = Math.max(max, open);
        } else if (s[i] === ")") {
            open--;
        }
    }

    return max;
};