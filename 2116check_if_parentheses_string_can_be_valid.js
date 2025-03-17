// https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/

var canBeValid = function(s, locked) {
    let open = [];
    let free = [];

    for (let i = 0; i < s.length; i++) {
        if (locked[i] === "1") {
            if (s[i] === "(") {
                open.push(i);
            } else {
                if (open.length > 0) {
                    open.pop();
                } else if (free.length > 0) {
                    free.pop();
                } else {
                    return false;
                }
            }
        } else {
            free.push(i);
        }
    }

    while (open.length > 0 && free.length > 0 && free[free.length - 1] > open[open.length - 1]) {
        free.pop();
        open.pop();
    }

    if (open.length > 0 || free.length % 2 !== 0) {
        return false;
    }

    return true;
};


var canBeValid = function(s, locked) {
    if (s.length % 2 !== 0) return false;

    let free = 0;
    let open = 0;

    for (let i = 0; i < s.length; i++) {
        if (locked[i] === "1") {
            if (s[i] === "(") {
                open++;
            } else {
                if (open > 0) {
                    open--;
                } else if (free > 0) {
                    free--;
                } else {
                    return false;
                }
            }
        } else {
            free++;
        }
    }

    if (open === 0) {
        return true;
    }

    free = 0;
    let close = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (locked[i] === "1") {
            if (s[i] === ")") {
                close++;
            } else {
                if (close > 0) {
                    close--;
                } else if (free > 0) {
                    free--;
                } else {
                    return false;
                }
            }
        } else {
            free++;
        }
    }

    return true;
};