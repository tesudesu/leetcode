// https://leetcode.com/problems/count-the-digits-that-divide-a-number/

var countDigits = function(num) {
    let n = num;
    let arrDigs = [];
    while (n > 0) {
        arrDigs.push(n % 10);
        n = Math.floor(n/10);
    }
    let res = 0;
    for (let i = 0; i < arrDigs.length; i++) {
        if (num % arrDigs[i] === 0) {
            res++;
        }
    }
    return res;
};