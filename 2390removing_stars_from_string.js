// https://leetcode.com/problems/removing-stars-from-a-string/

var removeStars = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "*") {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.join('');
};

// var removeStars = function(s) {
//     while (s.includes("*")) {
//         s = s.replace(/[a-z]\*/, "");
//     }
//     return s;
// };