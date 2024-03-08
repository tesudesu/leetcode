// https://leetcode.com/problems/count-submatrices-with-top-left-element-and-sum-less-than-k/

var countSubmatrices = function(grid, k) {
    const prefixSums = Array(grid.length).fill().map(() => Array(grid[0].length).fill());
    prefixSums[0][0] = grid[0][0];

    let tot = 0;
    if (prefixSums[0][0] <= k) {
        tot++;
    } else {
        return tot;
    }

    for (let i = 1; i < grid[0].length; i++) {
        prefixSums[0][i] = grid[0][i] + prefixSums[0][i - 1];
        if (prefixSums[0][i] <= k) {
            tot++;
        }
    }

    for (let i = 1; i < grid.length; i++) {
        prefixSums[i][0] = grid[i][0] + prefixSums[i - 1][0];
        if (prefixSums[i][0] <= k) {
            tot++;
        }
    }

    for (let i = 1; i < grid.length; i++) {
        for (let j = 1; j < grid[0].length; j++) {
            prefixSums[i][j] = prefixSums[i - 1][j] + prefixSums[i][j - 1] - prefixSums[i - 1][j - 1] + grid[i][j];
            if (prefixSums[i][j] <= k) {
                tot++;
            }
        }
    }

    return tot;
};