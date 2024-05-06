// https://leetcode.com/problems/valid-word/description/

var isValid = function(word) {
    if (word.length < 3) {
        return false;
    }

    const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    const digits = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);

    let hasVowel = false;
    let hasConsonant = false;

    for (let i = 0; i < word.length; i++) {
        if (word[i] === "@" || word[i] === "#" || word[i] === "$") {
            return false;
        } else if (vowels.has(word[i])) {
            hasVowel = true;
        } else if (digits.has(word[i])) {
            continue;
        } else {
            hasConsonant = true;
        }
    }

    return hasConsonant && hasVowel;
};