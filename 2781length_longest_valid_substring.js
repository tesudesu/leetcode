// https://leetcode.com/problems/length-of-the-longest-valid-substring/

var longestValidSubstring = function(word, forbidden) {
    const forbiddenSet = new Set(forbidden);
    let left = 0;
    let longest = 0;

    for (let i = 0; i < word.length; i++) {
        for (let j = i; j >= left && j > i - 10; j--) {
            if (forbiddenSet.has(word.slice(j, i + 1))) {
                left = j + 1;
                break;
            }
        }
        longest = Math.max(longest, i - left + 1);
    }

    return longest;
};