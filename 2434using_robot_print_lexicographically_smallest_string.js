// https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/

var robotWithString = function(s) {
    let last = Array(26).fill(-1);

    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i) - 97;
        last[code] = i;
    }

    let ans = [];
    let stack = [];
    let j = 0;
    while (last[j] === -1) {
        j++;
    }

    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);
        while (stack.length > 0 && stack[stack.length - 1].charCodeAt(0) - 97 <= j) {
            ans.push(stack.pop());
            while (last[j] === -1 || last[j] <= i) {
                j++;
            }
        }
    }

    while (stack.length > 0) {
        ans.push(stack.pop());
    }

    return ans.join("");
};