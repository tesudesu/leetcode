// https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/

var minimumLength = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right && s[left] === s[right]) {
        let curr = s[left];
        while (s[left] === curr) {
            left++;
        }
        while (s[right] === curr) {
            right--;
        } 
    }

    return right - left >= 0 ? right - left + 1 : 0;
};