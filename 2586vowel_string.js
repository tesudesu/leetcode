// https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/

var vowelStrings = function(words, left, right) {
    let tot = 0;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    for (let i = left; i <= right; i++) {
        const curr = words[i];
        if (vowels.has(curr[0]) && vowels.has(curr[curr.length-1])) {
            tot++;
        }
    }
    return tot;
};