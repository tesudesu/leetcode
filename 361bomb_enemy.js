// https://leetcode.com/problems/bomb-enemy/

var maxKilledEnemies = function(grid) {
    const n = grid.length;
    const m = grid[0].length;
    
    let prefixLeft = Array(n).fill().map(() => Array(m).fill());

    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === "E") {
                sum++;
            } else if (grid[i][j] === "W") {
                sum = 0;
            }
            prefixLeft[i][j] = sum;
        }
    }

    let prefixRight = Array(n).fill().map(() => Array(m).fill());

    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = m - 1; j >= 0; j--) {
            if (grid[i][j] === "E") {
                sum++;
            } else if (grid[i][j] === "W") {
                sum = 0;
            }
            prefixRight[i][j] = sum;
        }
    }

    let prefixDown = Array(n).fill().map(() => Array(m).fill());

    for (let j = 0; j < m; j++) {
        let sum = 0;
        for (let i = 0; i < n; i++) {
            if (grid[i][j] === "E") {
                sum++;
            } else if (grid[i][j] === "W") {
                sum = 0;
            }
            prefixDown[i][j] = sum;
        }
    }

    let prefixUp = Array(n).fill().map(() => Array(m).fill());

    for (let j = 0; j < m; j++) {
        let sum = 0;
        for (let i = n - 1; i >= 0; i--) {
            if (grid[i][j] === "E") {
                sum++;
            } else if (grid[i][j] === "W") {
                sum = 0;
            }
            prefixUp[i][j] = sum;
        }
    }

    let max = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === "0") {
                let sum = prefixLeft[i][j] + prefixRight[i][j] + prefixDown[i][j] + prefixUp[i][j];
                max = Math.max(max, sum);
            }
        }
    }

    return max;
};