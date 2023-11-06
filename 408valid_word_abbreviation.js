// https://leetcode.com/problems/valid-word-abbreviation/

var validWordAbbreviation = function(word, abbr) {
    let wordIndex = 0;
    let i = 0;

    while (i < abbr.length) {
        if (abbr[i] === word[wordIndex]) {
            wordIndex++;
            i++;
        } else if (abbr.charCodeAt(i) >= 49 && abbr.charCodeAt(i) <= 57) {
            let num = 0;
            while (i < abbr.length && abbr.charCodeAt(i) >= 48 && abbr.charCodeAt(i) <= 57) {
                num = (num * 10) + Number(abbr[i]);
                i++;
            }
            for (let j = 1; j <= num; j++) {
                wordIndex++;
            }
            if (wordIndex > word.length) return false;
        } else {
            return false;
        }
    }

    return wordIndex === word.length;
};