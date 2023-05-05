// https://leetcode.com/problems/reverse-only-letters/

var reverseOnlyLetters = function(s) {
    let arr = s.split('');
    let rev = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i].charCodeAt() >= 65 && arr[i].charCodeAt() <= 90) || arr[i].charCodeAt() >= 97) {
            for (let j = rev; j >= 0; j--) {
                if ((arr[j].charCodeAt() >= 65 && arr[j].charCodeAt() <= 90) || arr[j].charCodeAt() >= 97) {
                    const temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                    rev = j - 1;
                    break;
                }
            }
        }
        if (rev <= i) break;
    }
    return arr.join('');
};