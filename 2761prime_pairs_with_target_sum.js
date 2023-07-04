// https://leetcode.com/problems/prime-pairs-with-target-sum/

var findPrimePairs = function(n) {
    let ans = [];

    for (let x = 1; x <= Math.floor(n / 2); x++) {
        const y = n - x;
        if (isPrime(x) && isPrime(y)) {
            ans.push([x, y]);
        }
    }

    return ans;
};

const isPrime = (num) => {
    if (num === 1) return false;
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) return false;
    }
    return true;
}