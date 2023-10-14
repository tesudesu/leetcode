// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/

var minRemoveToMakeValid = function(s) {
    let str = "";

    let open = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            str += s[i];
            open++;
        } else if (s[i] === ")") {
            if (open > 0) {
                str += s[i];
                open--;
            }
        } else {
            str += s[i];
        }
    }

    if (open === 0) return str;

    let res = "";

    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === "(" && open > 0) {
            open--;
        } else {
            res = str[i] + res;
        }
    }

    return res;
};