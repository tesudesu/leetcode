// https://leetcode.com/problems/reverse-words-in-a-string-iii/

var reverseWords = function(s) {
    let split = s.split(' ');
    let result = '';
    for (let i = 0; i < split.length; i++){
        for (let j = split[i].length-1; j >= 0; j--) {
            result += split[i][j];
        }
        if (i != split.length-1) {
            result += ' ';
        }
    }
    return result;
};