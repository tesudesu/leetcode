// https://leetcode.com/problems/string-compression-iii/

var compressedString = function(word) {
    let arr = [];
    let currNum = 1;

    for (let i = 1; i < word.length; i++) {
        if (word[i] !== word[i - 1] || currNum === 9) {
            arr.push(String(currNum));
            arr.push(word[i - 1]);
            currNum = 1;
        } else {
            currNum++;
        }
    }

    arr.push(String(currNum));
    arr.push(word[word.length - 1]);

    return arr.join("");
};