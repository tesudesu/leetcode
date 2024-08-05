// https://leetcode.com/problems/maximum-number-of-operations-to-move-ones-to-the-end/

var maxOperations = function(s) {
    let tot = 0;
    let steps = 0;

    for (let i = s.length - 2; i >= 0; i--) {
        if (s[i] === "1") {
            if (s[i + 1] === "0") {
                steps++;
                tot += steps;
            } else {
                tot += steps;
            }
        }
    }

    return tot;
};