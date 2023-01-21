// https://leetcode.com/problems/reverse-string/

var reverseString = function(s) {
    for (let i = s.length - 2; i >= 0; i--) {
        s.push(s[i]);
    }
    let i = 1;
    while (i <= s.length - 1) {
        s.shift();
        i++;
    }
};
