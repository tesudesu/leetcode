// https://leetcode.com/problems/perfect-number/

var checkPerfectNumber = function(num) {
    let factors = [];
    const limit = Math.ceil(Math.sqrt(num));
    for (let i = 1; i < limit; i++) {
        if (num % i == 0) {
            factors.push(i);
            factors.push(num/i);
        }
    }
    let total = 0;
    for (let i = 0; i < factors.length; i++) {
        total += factors[i];
    }
    return num == total-num;
};