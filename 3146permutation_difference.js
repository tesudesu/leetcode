// https://leetcode.com/problems/permutation-difference-between-two-strings/

var findPermutationDifference = function(s, t) {
    const sMap = Array(s.length).fill(-1);

    for (let i = 0; i < s.length; i++) {
        sMap[s.charCodeAt(i) - 97] = i;
    }

    let ans = 0;

    for (let i = 0; i < t.length; i++) {
        ans += Math.abs(sMap[t.charCodeAt(i) - 97] - i);
    }

    return ans;
};