// https://leetcode.com/problems/island-perimeter/

var islandPerimeter = function(grid) {
    let tot = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 0) continue;
            if (i - 1 < 0 || (i - 1 >= 0 && grid[i - 1][j] === 0)) {
                tot++;
            }
            if (i + 1 === grid.length || (i + 1 < grid.length && grid[i + 1][j] === 0)) {
                tot++;
            }
            if (j - 1 < 0 || (j - 1 >= 0 && grid[i][j - 1] === 0)) {
                tot++;
            }
            if (j + 1 === grid[0].length || (j + 1 < grid[0].length && grid[i][j + 1] === 0)) {
                tot++;
            }
        }
    }

    return tot;
};


var islandPerimeter = function(grid) {
    const gridLength = grid.length;
    const length = grid[0].length;
    let max = 0;
    for (let i = 0; i < gridLength; i++) {
        for (let j = 0; j < length; j++) {
            if (grid[i][j] == 1) {
                max += 4;
            }
        }
    }
    for (let i = 0; i < gridLength; i++) {
        for (let j = 0; j < length-1; j++) {
            if (grid[i][j] == 1 && grid[i][j+1] == 1) {
                max -= 2;
            }
        }
    }
    for (let i = 0; i < gridLength-1; i++) {
        for (let j = 0; j < length; j++) {
            if (grid[i][j] == 1 && grid[i+1][j] == 1) {
                max -= 2;
            }
        }
    }
   return max;
};