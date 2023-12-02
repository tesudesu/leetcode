// https://leetcode.com/problems/knight-dialer/

var knightDialer = function(n) {
    let moves = [[4, 6], [6, 8], [7, 9], [4, 8], [3, 9, 0], [], [1, 7, 0], [2, 6], [1, 3], [2, 4]];

    let cache = Array(n + 1).fill().map(() => Array(10).fill(-1));

    const dp = (remain, curr) => {
        if (remain === 0) {
            return 1;
        }
        if (cache[remain][curr] !== -1) {
            return cache[remain][curr];
        }

        const nextDigit = moves[curr];
        let sum = 0;
        for (let i = 0; i < nextDigit.length; i++) {
            sum = (sum + dp(remain - 1, nextDigit[i])) % (1e9 + 7);
        }

        cache[remain][curr] = sum;

        return sum;
    }

    let tot = 0;

    for (let i = 0; i <= 9; i++) {
        tot = (tot + dp(n - 1, i)) % (1e9 + 7);
    }

    return tot;
};


var knightDialer = function(n) {
    let moves = [[4, 6], [6, 8], [7, 9], [4, 8], [3, 9, 0], [], [1, 7, 0], [2, 6], [1, 3], [2, 4]];

    let dp = Array(n).fill().map(() => Array(10).fill(0));

    for (let i = 0; i < dp[0].length; i++) {
        dp[0][i] = 1;
    }

    for (let i = 1; i < dp.length; i++) {
        for (let j = 0; j <= 9; j++) {
            let sum = 0;
            let nextDigit = moves[j];
            for (let k = 0; k < nextDigit.length; k++) {
                sum = (sum + dp[i - 1][nextDigit[k]]) % (1e9 + 7);
            }
            dp[i][j] = sum;
        } 
    }

    let tot = 0;

    for (let i = 0; i < dp[0].length; i++) {
        tot = (tot + dp[n - 1][i]) % (1e9 + 7);
    }

    return tot;
};