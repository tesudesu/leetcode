// https://leetcode.com/problems/regions-cut-by-slashes/

var regionsBySlashes = function(grid) {
    const expanded = Array(grid.length * 3).fill().map(() => Array(grid.length * 3).fill(0));

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            if (grid[i][j] === "/") {
                expanded[i * 3][j * 3 + 2] = 1;
                expanded[i * 3 + 1][j * 3 + 1] = 1;
                expanded[i * 3 + 2][j * 3] = 1;
            } else if (grid[i][j] === "\\") {
                expanded[i * 3][j * 3] = 1;
                expanded[i * 3 + 1][j * 3 + 1] = 1;
                expanded[i * 3 + 2][j * 3 + 2] = 1;
            }
        }
    }

    let regions = 0;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    for (let i = 0; i < expanded.length; i++) {
        for (let j = 0; j < expanded.length; j++) {
            if (expanded[i][j] === 0) {
                regions++;
                const queue = new Queue();
                queue.enqueue([i, j]);
                while (!queue.isEmpty()) {
                    const [x, y] = queue.dequeue();
                    for (const [dx, dy] of directions) {
                        const newX = x + dx;
                        const newY = y + dy;
                        if (newX >= 0 && newX < expanded.length && newY >= 0 && newY < expanded.length) {
                            if (expanded[newX][newY] === 0) {
                                expanded[newX][newY] = 1;
                                queue.enqueue([newX, newY]);
                            }
                        }
                    }
                }
            }
        }
    }

    return regions;
};