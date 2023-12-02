// https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/

var countCharacters = function(words, chars) {
    const freq = new Map();
    for (const char of chars) {
        freq.set(char, (freq.get(char) + 1) || 1);
    }
    let tot = 0;

    for (const word of words) {
        const currFreq = new Map();
        let found = true;
        for (let i = 0; i < word.length; i++) {
            if (!freq.has(word[i])) {
                found = false;
                break;
            }
            if (currFreq.has(word[i])) {
                if (currFreq.get(word[i]) >= freq.get(word[i])) {
                    found = false;
                    break;
                }
            }
            currFreq.set(word[i], (currFreq.get(word[i]) + 1) || 1);
        }
        if (found) {
            tot += word.length;
        }
    }

    return tot;
};