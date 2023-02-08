// https://leetcode.com/problems/detect-capital/

var detectCapitalUse = function(word) {
    if (word.toUpperCase() === word) {
        return true;
    }
    if (word.toLowerCase() === word) {
        return true;
    }
    if (/^[A-Z][a-z]*$/.test(word)) {
        return true;
    }
    return false;
};