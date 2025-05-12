// https://leetcode.com/problems/apply-operations-to-maximize-score/

var maximumScore = function (nums, k) {
    const getPrimeScore = (num) => {
        let tot = 0;
        for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
            if (num % i === 0) {
                tot++;
                num = num / i;
            }
            while (num % i === 0) {
                num = num / i;
            }
        }
        if (num > 1) {
            tot++;
        }
        return tot;
    }

    let primeScores = Array(nums.length).fill();

    for (let i = 0; i < nums.length; i++) {
        primeScores[i] = getPrimeScore(nums[i]);
    }

    let stack = [];
    let left = Array(nums.length).fill(-1);
    let right = Array(nums.length).fill(nums.length);
    let mapped = Array(nums.length).fill();

    for (let i = 0; i < nums.length; i++) {
        mapped[i] = [nums[i], i];

        while (stack.length > 0 && primeScores[i] > primeScores[stack[stack.length - 1]]) {
            right[stack[stack.length - 1]] = i;
            stack.pop();
        }
        if (stack.length > 0) {
            left[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }

    mapped.sort((a, b) => b[0] - a[0]);

    const mod = BigInt(1e9 + 7);

    let score = 1n;

    function power(base, exp) {
        let res = 1n;
        while (exp > 0) {
            if (exp % 2 === 1) {
                res = (res * base) % mod;
            }
            base = (base * base) % mod;
            exp = Math.floor(exp / 2);
        }
        return res;
    }

    for (const [num, index] of mapped) {
        let subarrays = (index - left[index]) * (right[index] - index);
        let take = Math.min(k, subarrays);
        score = (score * power(BigInt(num), take)) % mod;
        k -= take;
        if (k === 0) break;
    }

    return Number(score);
};