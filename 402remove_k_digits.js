// https://leetcode.com/problems/remove-k-digits/

var removeKdigits = function(num, k) {
    let stack = [];
    let removed = 0;

    let i = 0;

    while (removed < k && i < num.length) {
        while (removed < k && stack.length > 0 && num[i] < stack[stack.length - 1]) {
            stack.pop();
            removed++;
        }
        stack.push(num[i]);
        i++;
    }

    while (i < num.length) {
        stack.push(num[i]);
        i++;
    }

    while (stack.length > 0 && removed < k) {
        stack.pop();
        removed++;
    }

    let res = "";

    i = 0;

    while (stack[i] === "0") {
        i++;
    }

    while (i < stack.length) {
        res += stack[i];
        i++;
    }

    return res ? res : "0";
};