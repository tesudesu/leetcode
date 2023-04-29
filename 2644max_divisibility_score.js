// https://leetcode.com/problems/find-the-maximum-divisibility-score/

var maxDivScore = function(nums, divisors) {
    let max = 0;
    let maxDivisor = Infinity;
    for (let i = 0; i < divisors.length; i++) {
        let currScore = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] % divisors[i] === 0) {
                currScore++;
            }
        }
        if (currScore > max) {
            max = currScore;
            maxDivisor = divisors[i];
        } else if (currScore === max && divisors[i] < maxDivisor) {
            maxDivisor = divisors[i];
        }
    }
    return maxDivisor;
};