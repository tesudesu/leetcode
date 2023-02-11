// https://leetcode.com/problems/happy-number/

var isHappy = function(n) {
    let process = [];
    process.push(n);
    let num = n;
    while (num !== 1) {
        num = 0;
        while (n > 0) {
            num += Math.pow(n % 10, 2);
            n = Math.floor(n/10);
        }
        if (process.includes(num)) {
            return false;
        }
        process.push(num);
        n = num;
    }
    return true;
};