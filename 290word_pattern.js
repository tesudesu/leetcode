// https://leetcode.com/problems/word-pattern/

var wordPattern = function(pattern, s) {
    const words = s.split(' ');
    let wordsPattern = [];
    let num = 1;
    wordsPattern[0] = num;
    let patPattern = [];
    let number = 1;
    patPattern[0] = number;
    for (let i = 1; i < words.length; i++) {
        for (let j = 0; j < i; j++) {
            if (words[i] == words[j]) {
                wordsPattern[i] = wordsPattern[j];
                break;
            } else {
                num++;
                wordsPattern[i] = num;
            }
        }
    }
    for (let i = 1; i < pattern.length; i++) {
        for (let j = 0; j < i; j++) {
            if (pattern[i] == pattern[j]) {
                patPattern[i] = patPattern[j];
                break;
            } else {
                number++;
                patPattern[i] = number;
            }
        }
    }
    return !!(wordsPattern.toString() == patPattern.toString());
};



