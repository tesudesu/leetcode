// https://leetcode.com/problems/shortest-distance-to-a-character/

var shortestToChar = function(s, c) {
    let ans = new Array(s.length).fill(-1);
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            ans[i] = 0;
        }
    }
    let marker = 0;
    while (ans.includes(-1)) {
        for (let i = 0; i < ans.length; i++) {
            if (ans[i] === marker) {
                if (ans[i-1] === -1) {
                    ans[i-1] = marker+1;
                }
                if (ans[i+1] === -1) {
                    ans[i+1] = marker+1;
                }
            }
        }
        marker++;
    }
    return ans;
};