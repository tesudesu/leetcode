// https://leetcode.com/problems/count-primes/

var countPrimes = function(n) {
    if (n <= 2) return 0;

    let tot = 1;

    for (let i = 3; i < n; i++) {
        let isPrime = true;
        const root = Math.floor(Math.sqrt(i));
        for (let j = 2; j <= root; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            tot++;
        }
    }

    return tot;
};