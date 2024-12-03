// https://leetcode.com/problems/circular-sentence/

var isCircularSentence = function(sentence) {
    sentence = sentence.split(" ");

    for (let i = 0; i < sentence.length - 1; i++) {
        let word = sentence[i];
        let nextWord = sentence[i + 1];
        if (word[word.length - 1] !== nextWord[0]) {
            return false;
        }
    }

    let firstWord = sentence[0];
    let lastWord = sentence[sentence.length - 1];

    if (firstWord[0] !== lastWord[lastWord.length - 1]) {
        return false;
    }

    return true;
};