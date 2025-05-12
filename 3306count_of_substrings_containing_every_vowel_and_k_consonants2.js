// https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii/

var countOfSubstrings = function(word, k) {
    let consonants = 0;
    const vowels = new Map();
    const isVowel = new Set(["a", "e", "i", "o", "u"]);
    let tot = 0;

    let start = 0;

    let nextConsonant = Array(word.length).fill();
    let nextConsonantIndex = word.length;

    for (let i = word.length - 1; i >= 0; i--) {
        nextConsonant[i] = nextConsonantIndex;
        if (!isVowel.has(word[i])) {
            nextConsonantIndex = i;
        }
    }

    for (let i = 0; i < word.length; i++) {
        if (isVowel.has(word[i])) {
            vowels.set(word[i], vowels.get(word[i]) + 1 || 1);
        } else {
            consonants++;
        }

        while (consonants > k) {
            if (isVowel.has(word[start])) {
                vowels.set(word[start], vowels.get(word[start]) - 1);
                if (vowels.get(word[start]) === 0) {
                    vowels.delete(word[start]);
                }
            } else {
                consonants--;
            }
            start++;
        }

        while (vowels.size === 5 && consonants === k) {
            tot += nextConsonant[i] - i;
            if (isVowel.has(word[start])) {
                vowels.set(word[start], vowels.get(word[start]) - 1);
                if (vowels.get(word[start]) === 0) {
                    vowels.delete(word[start]);
                }
            } else {
                consonants--;
            }
            start++;
        }
    }

    return tot;
};