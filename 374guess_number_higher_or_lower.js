// https://leetcode.com/problems/guess-number-higher-or-lower/

var guessNumber = function(n) {
    let start = 0;
    let end = n;
    while (guess(Math.floor((end-start)/2) + start) !== 0) {
        if (guess(Math.floor((end-start)/2) + start) === 1) {
            if (Math.floor((end-start)/2) + start === start) {
                start++;
            } else {
                start = Math.floor((end-start)/2) + start;
            }
        } else {
            if (end - Math.floor((end-start)/2) === end) {
                end--;
            } else {
                end = end - Math.floor((end-start)/2);
            }
        }
    }
    return Math.floor((end-start)/2) + start;
};