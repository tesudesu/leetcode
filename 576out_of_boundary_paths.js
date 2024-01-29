// https://leetcode.com/problems/out-of-boundary-paths/

var findPaths = function(m, n, maxMove, startRow, startColumn) {
    let prev = Array(m).fill().map(() => Array(n).fill(0));
    prev[startRow][startColumn] = 1;

    const moves = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    let count = 0;

    for (let i = 0; i < maxMove; i++) {
        let curr = Array(m).fill().map(() => Array(n).fill(0));

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (prev[i][j] === 0) continue;
                
                for (const [di, dj] of moves) {
                    if (i + di >= 0 && i + di < m && j + dj >= 0 && j + dj < n) {
                        curr[i + di][j + dj] = (curr[i + di][j + dj] + prev[i][j]) % (1e9 + 7);
                    } else {
                        count = (count + prev[i][j]) % (1e9 + 7);
                    }
                }
            }
        }

        prev = curr;
    }

    return count;
};


// Top-down DP

var findPaths = function(m, n, maxMove, startRow, startColumn) {
    const cache = Array(maxMove).fill().map(() => Array(m).fill().map(() => Array(n).fill(-1)));

    const dp = (move, i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n) {
            return 1;
        }

        if (move === maxMove) {
            return 0;
        }

        if (cache[move][i][j] !== -1) {
            return cache[move][i][j];
        }

        const ans = (dp(move + 1, i - 1, j) + dp(move + 1, i + 1, j) + dp(move + 1, i, j - 1) + dp(move + 1, i, j + 1)) % (1e9 + 7);

        cache[move][i][j] = ans;

        return ans;
    }

    return dp(0, startRow, startColumn);
};