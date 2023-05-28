// https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function(s) {
    let stack = [];
    let max = 0;

    for (let i = 0; i < s.length; i++) {
        const ind = stack.indexOf(s[i]);
        if (ind >= 0) {
            max = Math.max(max, stack.length);
            stack = stack.slice(ind+1);
        }
        stack.push(s[i]);
    }

    return Math.max(max, stack.length);
};