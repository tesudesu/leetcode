// https://leetcode.com/problems/uncommon-words-from-two-sentences/

var uncommonFromSentences = function(s1, s2) {
    const s1Split = s1.split(' ');
    const s2Split = s2.split(' ');
    let unique = [];
    for (let i = 0; i < s1Split.length; i++) {
        let word = s1Split[i];
        if (s1Split.indexOf(word) == s1Split.lastIndexOf(word)) {
            if (!s2Split.includes(word)) {
                unique.push(word);
            }
        }
    }
    for (let i = 0; i < s2Split.length; i++) {
        let word = s2Split[i];
        if (s2Split.indexOf(word) == s2Split.lastIndexOf(word)) {
            if (!s1Split.includes(word)) {
                unique.push(word);
            }
        }
    }
    return unique;
};