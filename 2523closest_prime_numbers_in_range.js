// https://leetcode.com/problems/closest-prime-numbers-in-range/

// Sieve

var closestPrimes = function(left, right) {
    let sieve = Array(right + 1).fill(true);
    sieve[1] = false;

    for (let i = 2; i <= Math.floor(Math.sqrt(right)); i++) {
        if (!sieve[i]) continue;
        for (let j = i * 2; j <= right; j += i) {
            sieve[j] = false;
        }
    }

    let num1 = -1;
    let num2 = -1;
    let last = -1;
    let min = Infinity;

    for (let i = left; i <= right; i++) {
        if (sieve[i]) {
            if (num1 === -1) {
                num1 = i;
            } else if (num2 === -1) {
                num2 = i;
                min = num2 - num1;
            } else if (min > i - last) {
                min = i - last;
                num1 = last;
                num2 = i;
            }
            last = i;
        }
    }

    if (min === Infinity) {
        return [-1, -1];
    } else {
        return [num1, num2];
    }
};


var closestPrimes = function(left, right) {
    const isPrime = (num) => {
        if (num === 1) {
            return false;
        }
        for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    let min = Infinity;
    let num1 = -1;
    let num2 = -1;
    let last = -1;

    for (let i = left; i <= right; i++) {
        if (isPrime(i)) {
            if (num1 === -1) {
                num1 = i;
            } else if (num2 === -1) {
                num2 = i;
                min = num2 - num1;
            } else if (min > i - last) {
                min = i - last;
                num1 = last;
                num2 = i;
            }
            last = i;
        }
    }

    if (min !== Infinity) {
        return [num1, num2];
    } else {
        return [-1, -1];
    }
};