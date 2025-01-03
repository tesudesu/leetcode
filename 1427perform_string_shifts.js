// https://leetcode.com/problems/perform-string-shifts/

var stringShift = function(s, shift) {
    let start = 0;

    for (let [direction, amount] of shift) {
        amount = amount % s.length;
        if (direction === 0) {
            start = (start + s.length - amount) % s.length;
        } else {
            start = (start + amount) % s.length;
        }
    }

    let res = Array(s.length).fill();

    let j = 0;

    for (let i = start; i < s.length; i++) {
        res[i] = s[j];
        j++;
    }

    let i = 0;

    while (j < s.length) {
        res[i] = s[j];
        i++;
        j++;
    }

    return res.join("");
};