// https://leetcode.com/problems/positions-of-large-groups/

var largeGroupPositions = function(s) {
    let ans = [];
    let curr = [];
    curr.push(0);
    for (let i = 1; i <= s.length; i++) {
        if (s[i] != s[i-1]) {
            curr.push(i-1);
            if (curr[1] - curr[0] >= 2) {
                ans.push(curr);
            }
            curr = [];
            curr.push(i);
        }
    }
    return ans;
};