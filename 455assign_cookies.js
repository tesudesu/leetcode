// https://leetcode.com/problems/assign-cookies/

var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let tot = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = tot; j < g.length; j++) {
            if (s[i] >= g[j]) {
                tot++;
                break;
            }
        } 
    }
    return tot;
};