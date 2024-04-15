// https://leetcode.com/problems/length-of-last-word/

var lengthOfLastWord = function(s) {
    let i = s.length - 1;
    while (s[i] === " ") {
        i--;
    }
    let len = 0;
    while (s[i] !== " " && i >= 0) {
        len++;
        i--;
    }
    return len;
};


var lengthOfLastWord = function(s) {
    const splitArr = s.split(' ');
    for (let i = splitArr.length - 1; i >=0; i--) {
        if (splitArr[i].length !== 0) {
            return splitArr[i].length;
        }
    }
};
