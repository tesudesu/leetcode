// https://leetcode.com/problems/check-if-the-number-is-fascinating/

var isFascinating = function(n) {
    let twice = n * 2;
    let trice = n * 3;
    let string = n.toString() + twice.toString() + trice.toString();

    let set = new Set();

    for (let i = 0; i < string.length; i++) {
        if (string[i] == '0') continue;
        if (set.has(string[i])) return false;
        set.add(string[i]);
    }

    return set.size === 9;
};