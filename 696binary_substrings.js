// https://leetcode.com/problems/count-binary-substrings/

var countBinarySubstrings = function(s) {
    let prev = 0;
    let curr = 1;
    let ans = 0;
    for (let i = 1; i <= s.length; i++) {
        if (s[i] === s[i-1]) {
            curr++;
        } else {
            ans += Math.min(prev, curr);
            prev = curr;
            curr = 1;
        }
    }
    return ans;
};

// var countBinarySubstrings = function(s) {
//     let groups = [];
//     let group = 1;
//     for (let i = 1; i <= s.length; i++) {
//         if (s[i] === s[i-1]) {
//             group++;
//         } else {
//             groups.push(group);
//             group = 1;
//         }
//     }
//     let ans = 0;
//     for (let i = 1; i < groups.length; i++) {
//         ans += Math.min(groups[i], groups[i-1]);
//     }
//     return ans;
// };