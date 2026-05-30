// https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/

var minimumDeleteSum = function(s1, s2) {
    const cache = Array(s1.length).fill().map(() => Array(s2.length).fill(-1));

    const dp = (i, j) => {
        if (i === s1.length) {
            let tot = 0;
            for (let k = j; k < s2.length; k++) {
                tot += s2.charCodeAt(k);
            }
            return tot;
        }
        if (j === s2.length) {
            let tot = 0;
            for (let k = i; k < s1.length; k++) {
                tot += s1.charCodeAt(k);
            }
            return tot;
        }

        if (cache[i][j] !== -1) {
            return cache[i][j];
        }

        let minCost;

        if (s1[i] === s2[j]) {
            minCost = dp(i + 1, j + 1);
        } else {
            minCost = Math.min(dp(i + 1, j) + s1.charCodeAt(i), dp(i, j + 1) + s2.charCodeAt(j));
        }

        cache[i][j] = minCost;

        return minCost;
    }

    return dp(0, 0);
};