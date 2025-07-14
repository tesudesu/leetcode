// https://leetcode.com/problems/find-the-lexicographically-largest-string-from-the-box-i/

var answerString = function(word, numFriends) {
    if (numFriends === 1) {
        return word;
    }

    let maxIndex = 0;
    let maxCode = 0;

    for (let i = 0; i < word.length; i++) {
        let code = word.charCodeAt(i) - 97;
        if (code > maxCode) {
            maxCode = code;
            maxIndex = i;
        }
    }

    let maxIndices = [];

    for (let i = 0; i < word.length; i++) {
        let code = word.charCodeAt(i) - 97;
        if (code === maxCode) {
            maxIndices.push(i);
        }
    }

    let highestSubstring = "";

    for (let i = 0; i < maxIndices.length; i++) {
        let remainingFriends = Math.max(0, numFriends - maxIndices[i] - 1);
        let substring = word.slice(maxIndices[i], word.length - remainingFriends);
        if (substring > highestSubstring) {
            highestSubstring = substring;
        }
    }
    
    return highestSubstring;
};