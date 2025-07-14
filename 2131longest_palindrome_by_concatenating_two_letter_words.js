// https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/

var longestPalindrome = function(words) {
    const need = new Map();

    let tot = 0;

    for (const word of words) {
        const reverse = word[1] + word[0];
        if (need.has(reverse)) {
            tot += 4;
            need.set(reverse, need.get(reverse) - 1);
            if (need.get(reverse) === 0) {
                need.delete(reverse);
            }
        } else {
            need.set(word, (need.get(word) + 1) || 1);
        }
    }

    for (const [word, count] of need) {
        if (word[0] === word[1]) {
            return tot + 2;
        }
    }

    return tot;
};