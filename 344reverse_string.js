// https://leetcode.com/problems/reverse-string/

var reverseString = function(s) {
    for (let i = 0; i < Math.floor(s.length/2); i++) {
        const temp = s[i];
        s[i] = s[s.length-1-i];
        s[s.length-1-i] = temp;
    }
    return s;
};

// var reverseString = function(s) {
//     const length = s.length;
//     for (let i = length - 2; i >= 0; i--) {
//         s.push(s[i]);
//     }
//     s.splice(0, length - 1);
// };