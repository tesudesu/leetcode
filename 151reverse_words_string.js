// https://leetcode.com/problems/reverse-words-in-a-string/

var reverseWords = function(s) {
    s = s.trim().replace(/\s+/g, ' ');
    let arr = s.split(' ');
    for (let i = 0; i < Math.floor(arr.length/2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr.join(' ');
};