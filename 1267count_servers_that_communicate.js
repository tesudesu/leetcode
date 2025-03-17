// https://leetcode.com/problems/count-servers-that-communicate/

var countServers = function(grid) {
    let row = Array(grid.length).fill(0);
    let col = Array(grid[0].length).fill(0);

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                row[i]++;
                col[j]++;
            }
        }
    }

    let tot = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                if (row[i] > 1 || col[j] > 1) {
                    tot++;
                }
            }
        }
    }

    return tot;
};