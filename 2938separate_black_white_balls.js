// https://leetcode.com/problems/separate-black-and-white-balls/

var minimumSteps = function(s) {
    let ones = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "1") {
            ones.push(i);
        }
    }

    let tot = 0;

    let pos = s.length - 1;

    for (let i = ones.length - 1; i >= 0; i--) {
        tot += (pos - ones[i]);
        pos--;
    }

    return tot;
};