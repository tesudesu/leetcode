// https://leetcode.com/problems/verifying-an-alien-dictionary/

var isAlienSorted = function(words, order) {
    const letterToIndex = new Map();
    for (let i = 0; i < order.length; i++) {
        letterToIndex.set(order[i], i);
    }

    for (let i = 1; i < words.length; i++) {
        for (let j = 0; j < Math.min(words[i].length, words[i - 1].length); j++) {
            const letterCurr = words[i][j];
            const letterPrev = words[i - 1][j];
            if (letterToIndex.get(letterCurr) > letterToIndex.get(letterPrev)) {
                break;
            } else if (letterToIndex.get(letterCurr) < letterToIndex.get(letterPrev)) {
                return false;
            }
            if (j === Math.min(words[i].length, words[i - 1].length) - 1 && words[i].length < words[i - 1].length) {
                return false;
            } 
        }
    }

    return true;
};