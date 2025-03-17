// https://leetcode.com/problems/counting-words-with-a-given-prefix/

var prefixCount = function(words, pref) {
    let tot = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i].indexOf(pref) === 0) {
            tot++;
        }
    }

    return tot;
};