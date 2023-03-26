// https://leetcode.com/problems/number-of-lines-to-write-string/

var numberOfLines = function(widths, s) {
    let currLine = 0;
    let lines = 1;
    for (let i = 0; i < s.length; i++) {
        const currWord = widths[s.charCodeAt(i) - 97];
        if (currLine + currWord <= 100) {
            currLine += currWord;
        } else {
            currLine = currWord;
            lines++;
        }
    }
    return [lines, currLine];
};