// https://leetcode.com/problems/prime-in-diagonal/

var diagonalPrime = function(nums) {
    function isPrime(num) {
        if (num === 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
    
    let primes = [];
    for (let i = 0; i < nums.length; i++) {
        if (isPrime(nums[i][i])) {
            primes.push(nums[i][i]);
        }
        if (isPrime(nums[i][nums.length-i-1])) {
            primes.push(nums[i][nums.length-i-1]);
        }
    }
    return primes.length > 0 ? Math.max(...primes) : 0;
};