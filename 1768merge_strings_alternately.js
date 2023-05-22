// https://leetcode.com/problems/merge-strings-alternately/

var mergeAlternately = function(word1, word2) {
    let res = "";
    let min = Math.min(word1.length, word2.length);
    for (let i = 0; i < min; i++) {
        res += word1[i] + word2[i];
    }
    if (word1.length > word2.length) {
        res += word1.slice(min);
    } else if (word2.length > word1.length) {
        res += word2.slice(min);
    }
    return res;
};