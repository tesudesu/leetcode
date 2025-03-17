// https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/

var checkPowersOfThree = function(n) {
    let powers = [];

    let num = 1;

    while (num <= n) {
        powers.push(num);
        num *= 3;
    }

    const dp = (i, remainder) => {
        if (remainder === 0) {
            return true;
        }

        if (i === powers.length) {
            return false;
        }

        let take = dp(i + 1, remainder - powers[i]);
        let notake = dp(i + 1, remainder);

        return take || notake;
    }

    return dp(0, n);
};