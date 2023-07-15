// https://leetcode.com/problems/counting-bits/

// O(nlog(n)) time

var countBits = function(n) {
    let ans = Array(n + 1);

    for (let i = 0; i <= n; i++) {
        let tot = 0;
        let curr = i;
        while (curr > 0) {
            tot += curr % 2;
            curr = Math.floor(curr / 2);
        }
        ans[i] = tot;
    }

    return ans;
};


// O(n) time

// var countBits = function(n) {
//     let ans = Array(n + 1);
//     ans[0] = 0;

//     let current = 0;
//     let limit = Math.pow(2, current);

//     for (let i = 1; i <= n; i++) {
//         if (i === limit) {
//             ans[i] = 1;
//             current++;
//             limit = Math.pow(2, current);
//         } else {
//             ans[i] = 1 + ans[i - (limit / 2)];
//         }
//     }

//     return ans;
// };