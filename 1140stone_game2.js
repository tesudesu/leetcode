// https://leetcode.com/problems/stone-game-ii/

var stoneGameII = function(piles) {
    const cache = Array(piles.length).fill().map(() => Array(piles.length + 1).fill().map(() => Array(2).fill(-1)));

    const dp = (i, m, aliceTurn) => {
        if (i >= piles.length) {
            return 0;
        }

        if (cache[i][m][aliceTurn] !== -1) {
            return cache[i][m][aliceTurn];
        }

        let ans = aliceTurn === 1 ? 0 : Infinity;
        let tot = 0;
        let x = 0;

        for (let j = 0; j < m * 2 && j + i < piles.length; j++) {
            tot += piles[j + i];
            x++;
            if (aliceTurn) {
                ans = Math.max(ans, tot + dp(j + i + 1, Math.max(x, m), 0));
            } else {
                ans = Math.min(ans, dp(j + i + 1, Math.max(x, m), 1));
            }
        }

        cache[i][m][aliceTurn] = ans;

        return ans;
    }

    return dp(0, 1, 1);
};