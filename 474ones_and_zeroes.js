// https://leetcode.com/problems/ones-and-zeroes/

var findMaxForm = function(strs, m, n) {
    const cache = Array(strs.length).fill().map(() => Array(101).fill().map(() => Array(101).fill(-1)));

    const dp = (i, zeroes, ones) => {
        if (zeroes < 0 || ones < 0 || i === strs.length) {
            return 0;
        }

        if (cache[i][zeroes][ones] !== -1) {
            return cache[i][zeroes][ones];
        }

        let currZeroes = 0;
        let currOnes = 0;

        for (let j = 0; j < strs[i].length; j++) {
            if (strs[i][j] === "1") {
                currOnes++;
            } else {
                currZeroes++;
            }
        }

        let take = -Infinity;

        if (zeroes - currZeroes >= 0 && ones - currOnes >= 0) {
            take = dp(i + 1, zeroes - currZeroes, ones - currOnes) + 1;
        }

        const notTake = dp(i + 1, zeroes, ones);

        const ans = Math.max(take, notTake);

        cache[i][zeroes][ones] = ans;

        return ans;
    }

    return dp(0, m, n);
};