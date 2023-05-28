// https://leetcode.com/problems/minimum-string-length-after-removing-substrings/

var minLength = function(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'B') {
            if (stack[stack.length-1] === 'A') {
                stack.pop();
                continue;
            }
        } 
        if (s[i] === 'D') {
            if (stack[stack.length-1] === 'C') {
                stack.pop();
                continue;
            }
        }
        stack.push(s[i]);
    }

    return stack.length;
};

// var minLength = function(s) {
//     while (s.includes('AB') || s.includes('CD')) {
//         for (let i = 0; i < s.length; i++) {
//             if ((s[i] === 'A' && s[i+1] === 'B') || (s[i] === 'C' && s[i+1] ==='D' )) {
//                 s = s.slice(0, i) + s.slice(i+2);
//                 break;
//             }
//         }
//     }
//     return s.length;
// };