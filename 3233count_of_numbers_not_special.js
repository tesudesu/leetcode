// https://leetcode.com/problems/find-the-count-of-numbers-which-are-not-special/

var nonSpecialCount = function(l, r) {
    const lim = Math.floor(Math.sqrt(r));

    const isPrime = Array(lim + 1).fill(true);

    const end = Math.floor(Math.sqrt(lim));
    
    for (let i = 2; i <= end; i++) {
        if (!isPrime[i]) continue;
        for (let j = i * i; j <= lim; j += i) {
            isPrime[j] = false;
        }
    }

    let special = 0;
    let num = 2;

    while (num <= lim) {
        if (num * num >= l && isPrime[num]) {
            special++;
        }
        num++;
    }

    return r - l + 1 - special;
};