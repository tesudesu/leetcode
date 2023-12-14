// https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/

var onesMinusZeros = function(grid) {
    let onesRow = Array(grid.length).fill(0);
    let onesCol = Array(grid[0].length).fill(0);
    let zerosRow = Array(grid.length).fill(0);
    let zerosCol = Array(grid[0].length).fill(0);

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                onesRow[i]++;
                onesCol[j]++;
            } else {
                zerosRow[i]++;
                zerosCol[j]++;
            }
        }
    }

    let ans = Array(grid.length).fill().map(() => Array(grid[0].length).fill());

    for (let i = 0; i < ans.length; i++) {
        for (let j = 0; j < ans[0].length; j++) {
            ans[i][j] = onesRow[i] + onesCol[j] - zerosRow[i] - zerosCol[j];
        }
    }

    return ans;
};