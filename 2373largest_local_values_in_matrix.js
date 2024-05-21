// https://leetcode.com/problems/largest-local-values-in-a-matrix/

var largestLocal = function(grid) {
    const n = grid.length;
    const ans = Array(n - 2).fill().map(() => Array(n - 2).fill());

    for (let i = 0; i < n - 2; i++) {
        for (let j = 0; j < n - 2; j++) {
            let max = -Infinity;
            for (let k = 0; k < 3; k++) {
                for (let q = 0; q < 3; q++) {
                    max = Math.max(max, grid[i + k][j + q]);
                }
            }
            ans[i][j] = max;
        }
    }

    return ans;
};