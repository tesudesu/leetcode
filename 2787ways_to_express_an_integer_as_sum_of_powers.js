// https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/

var numberOfWays = function(n, x) {
    const cache = Array(n + 1).fill().map(() => Array(n + 1).fill(-1));

    const mod = 1e9 + 7;

    const dp = (remain, num) => {
        if (remain === 0) {
            return 1;
        }

        const curr = Math.pow(num, x);

        if (remain < 0 || curr > remain) {
            return 0;
        }

        if (cache[remain][num] !== -1) {
            return cache[remain][num];
        }

        const take = dp(remain - curr, num + 1);
        
        const notTake = dp(remain, num + 1);

        const ans = (take + notTake) % mod;

        cache[remain][num] = ans;

        return ans;
    }

    return dp(n, 1);
};