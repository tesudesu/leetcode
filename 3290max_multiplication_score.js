// https://leetcode.com/problems/maximum-multiplication-score/

var maxScore = function(a, b) {
    const cache = Array(b.length).fill().map(() => Array(4).fill(-1));

    const dp = (i, num) => {
        if (num === 4) {
            return 0;
        }

        if (i === b.length) {
            return -Infinity;
        }

        if (cache[i][num] !== -1) {
            return cache[i][num];
        }

        let take = dp(i + 1, num + 1) + a[num] * b[i];
        let noTake = dp(i + 1, num);

        cache[i][num] = Math.max(take, noTake);

        return cache[i][num];
    }

    return dp(0, 0);
};