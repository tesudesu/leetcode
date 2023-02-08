// https://leetcode.com/problems/reverse-string-ii/

var reverseStr = function(s, k) {
    let result = '';
    const length = s.length;
    const twok = 2*k;
    let reverseStart = 0;
    let reverseEnd = k;
    let normalEnd = twok;
    const times = Math.floor(length/twok);
    for (let i = 1; i <= times; i++) {
        for (let j = reverseEnd-1; j >= reverseStart; j--) {
            result += s[j];
        }
        for (let j = reverseEnd; j < normalEnd; j++) {
            result += s[j];
        }
        reverseEnd += twok;
        reverseStart += twok;
        normalEnd += twok;
    }
    const remainder = length % twok;
    if (remainder == 0) {
        return result;
    } else if (remainder < k) {
        for (let i = length-1; i >= reverseStart; i--) {
            result += s[i];
        }
        return result;
    } else {
        for (let i = reverseStart+k-1; i >= reverseStart; i--) {
            result += s[i];
        }
        for (let i = reverseStart+k; i < length; i++) {
            result += s[i];
        }
        return result;
    }
};