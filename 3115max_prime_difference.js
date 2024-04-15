// https://leetcode.com/problems/maximum-prime-difference/

var maximumPrimeDifference = function(nums) {
    let left;
    let right;

    for (let i = 0; i < nums.length; i++) {
        if (isPrime(nums[i])) {
            left = i;
            break;
        }
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        if (isPrime(nums[i])) {
            right = i;
            break;
        }
    }

    return right - left;
};

const isPrime = (num) => {
    if (num === 1) {
        return false;
    }

    const sq = Math.floor(Math.sqrt(num));

    for (let i = 2; i <= sq; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}