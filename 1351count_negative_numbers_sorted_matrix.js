// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/

var countNegatives = function(grid) {
    let tot = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] < 0) {
                tot += grid[0].length - j;
                break;
            }
        }
    }

    return tot;
};