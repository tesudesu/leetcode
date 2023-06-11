// https://leetcode.com/problems/determine-if-two-strings-are-close/

var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) return false;

    let word1Map = {};
    let word2Map = {};

    for (let i = 0; i < word1.length; i++) {
        if (word1Map[word1[i]]) {
            word1Map[word1[i]]++;
        } else {
            word1Map[word1[i]] = 1;
        }
    }

    for (let i = 0; i < word2.length; i++) {
        if (word2Map[word2[i]]) {
            word2Map[word2[i]]++;
        } else {
            word2Map[word2[i]] = 1;
        }
    }

    if (Object.keys(word1Map).length !== Object.keys(word2Map).length) return false;

    let word1Counts = [];
    let word2Counts = [];

    for (const key in word1Map) {
        if (!word2Map[key]) return false;
        if (word1Map[key] !== word2Map[key]) {
            word1Counts.push(word1Map[key]);
            word2Counts.push(word2Map[key]);
        }
    }

    for (const key in word2Map) {
        if (!word1Map[key]) return false;
    }

    word1Counts.sort((a, b) => a - b);
    word2Counts.sort((a, b) => a - b);

    return word1Counts.toString() === word2Counts.toString();
};