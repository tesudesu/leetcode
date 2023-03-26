// https://leetcode.com/problems/number-of-even-and-odd-bits/

var evenOddBit = function(n) {
    const str = n.toString(2);
    let even = 0;
    let odd = 0;
    let ind = 0;
    for (let i = str.length-1; i >= 0; i--) {
        if (str[i] == 1) {
            if (ind % 2 === 0) {
                even++;
            } else {
                odd++;
            }
        }
        ind++;
    }
    return [even, odd];
};