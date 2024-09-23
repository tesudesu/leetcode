// https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/

var findTheLongestSubstring = function(s) {
    const map = new Map();
    map.set(0, -1);
    const vowels = {
        "a": 1,
        "e": 2,
        "i": 4,
        "o": 8,
        "u": 16
    }
    let mask = 0;
    let longest = 0;

    for (let i = 0; i < s.length; i++) {
        if (vowels[s[i]]) {
            mask ^= vowels[s[i]];
        }
        if (map.has(mask)) {
            longest = Math.max(longest, i - map.get(mask));
        } else {
            map.set(mask, i);
        }
    }

    return longest;
};