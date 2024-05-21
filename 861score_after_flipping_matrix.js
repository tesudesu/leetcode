// https://leetcode.com/problems/score-after-flipping-matrix/

var matrixScore = function(grid) {
    for (let i = 0; i < grid.length; i++) {
        if (grid[i][0] === 0) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 1) {
                    grid[i][j] = 0;
                } else {
                    grid[i][j] = 1;
                }
            }
        }
    }

    for (let j = 1; j < grid[0].length; j++) {
        let countZeroes = 0;
        for (let i = 0; i < grid.length; i++) {
            if (grid[i][j] === 0) {
                countZeroes++;
            }
        }
        if (countZeroes > Math.floor(grid.length / 2)) {
            for (let i = 0; i < grid.length; i++) {
                if (grid[i][j] === 1) {
                    grid[i][j] = 0
                } else {
                    grid[i][j] = 1;
                }
            }
        }
    }

    let tot = 0;

    for (let i = 0; i < grid.length; i++) {
        let num = 1;
        for (let j = grid[0].length - 1; j >= 0; j--) {
            if (grid[i][j] === 1) {
                tot += num;
            }
            num = num << 1;
        }
    }

    return tot;
};