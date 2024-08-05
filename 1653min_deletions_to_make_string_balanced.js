// https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/

var minimumDeletions = function(s) {
    let totA = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "a") {
            totA++;
        }
    }

    let totB = 0;
    let res = s.length;

    for (let i = 0; i < s.length; i++) {
        res = Math.min(res, totA + totB);
        if (s[i] === "b") {
            totB++;
        } else {
            totA--;
        }
    }

    res = Math.min(res, totA + totB);

    return res;
};


var minimumDeletions = function(s) {
    let stack = [];
    let res = 0;

    for (let i = 0; i < s.length; i++) {
        if (stack.length === 0 && s[i] === "a") {
            continue;
        }
        if (s[i] === "b") {
            stack.push("b");
        } else {
            res++;
            stack.pop();
        }
    }

    return res;
};


var minimumDeletions = function(s) {
    let numB = 0;
    let res = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "a" && numB > 0) {
            res++;
            numB--;
        } else if (s[i] === "b") {
            numB++;
        }
    }

    return res;
};