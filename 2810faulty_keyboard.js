// https://leetcode.com/problems/faulty-keyboard/

var finalString = function(s) {
    let output = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== 'i') {
            output.push(s[i]);
        } else {
            output.reverse();
        }
    }

    return output.join("");
};