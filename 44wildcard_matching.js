// https://leetcode.com/problems/wildcard-matching/

var isMatch = function(s, p) {
    const cache = Array(s.length).fill().map(() => Array(p.length).fill(-1));

    const dp = (i, j) => {
        if (i === s.length && j === p.length) {
            return true;
        }

        if (i === s.length) {
            for (let k = j; k < p.length; k++) {
                if (p[k] !== "*") return false;
            }
            return true;
        }

        if (j === p.length) {
            return false;
        }

        if (cache[i][j] !== -1) {
            return cache[i][j];
        }

        let ans = false;

        if (s[i] === p[j] || p[j] === "?") {
            ans = ans || dp(i + 1, j + 1);
        }

        if (p[j] === "*") {
            ans = ans || dp(i + 1, j);
            ans = ans || dp(i + 1, j + 1);
            ans = ans || dp(i, j + 1);
        }

        cache[i][j] = ans;
        return ans;
    }

    return dp(0, 0);
};