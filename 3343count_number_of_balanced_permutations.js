// https://leetcode.com/problems/count-number-of-balanced-permutations/

// pick Math.floor(num.length / 2) numbers, such that their sum is tot / 2
var countBalancedPermutations = function(num) {
    const mod = 1000000007n;
    const count = Array(10).fill(0);
    let tot = 0;

    for (const number of num) {
        val = Number(number);
        count[val]++;
        tot += val;
    }

    if (tot % 2 !== 0) return 0;

    const target = tot / 2;
    const odd = Math.floor(num.length / 2);
    const even = num.length - odd;

    const powmod = (a, b) => {
        let res = 1n;
        a = a % mod;
        while (b > 0n) {
            if (b % 2n === 1n) {
                res = (res * a) % mod;
            }
            a = (a * a) % mod;
            b = b / 2n;
        }
        return res;
    }

    let max = Math.max(Math.ceil(num.length / 2), Math.max(...count));

    const fac = Array(max + 1).fill();
    fac[0] = 1n;

    for (let i = 1; i < fac.length; i++) {
        fac[i] = (fac[i - 1] * BigInt(i)) % mod;
    }

    const invfac = Array(max + 1).fill();
    invfac[invfac.length - 1] = powmod(fac[fac.length - 1], mod - 2n);

    for (let i = invfac.length - 2; i >= 0; i--) {
        invfac[i] = (invfac[i + 1] * BigInt(i + 1)) % mod;
    }

    const cache = Array(num.length).fill().map(() => Array(odd + 1).fill().map(() => Array(target + 1).fill(-1n)));

    const dp = (i, picked, currSum) => {
        if (i === num.length) {
            if (picked === odd && currSum === target) {
                return 1n;
            } else {
                return 0n;
            }
        }

        if (cache[i][picked][currSum] !== -1n) {
            return cache[i][picked][currSum];
        }

        // don't pick
        let ans = dp(i + 1, picked, currSum);

        // pick
        if (picked < odd && currSum + Number(num[i]) <= target) {
            ans = (ans + dp(i + 1, picked + 1, currSum + Number(num[i]))) % mod;
        } 

        cache[i][picked][currSum] = ans;

        return ans;
    }

    let ans = dp(0, 0, 0);
    ans = (ans * fac[odd]) % mod;
    ans = (ans * fac[even]) % mod;

    for (let i = 0; i < count.length; i++) {
        ans = (ans * invfac[count[i]]) % mod;
    }

    return Number(ans);
};