// https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/

var getLongestSubsequence = function(words, groups) {
    let ans = [words[0]];

    for (let i = 1; i < groups.length; i++) {
        if (groups[i] !== groups[i - 1]) {
            ans.push(words[i]);
        }
    }

    return ans;
};