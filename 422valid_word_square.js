// https://leetcode.com/problems/valid-word-square/

var validWordSquare = function(words) {
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        for (let j = 0; j < word.length; j++) {
            if (j >= words.length || words[j][i] !== word[j]) {
                return false;
            }
        }
    }

    return true;
};