// https://leetcode.com/problems/shortest-path-to-get-food/

const { Queue } = require('@datastructures-js/queue');

var getFood = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    const queue = new Queue();
    let visited = Array(m).fill().map(() => Array(n).fill(false));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "*") {
                queue.enqueue([i, j]);
                visited[i][j] = true;
                break;
            }
        }
    }

    let steps = 0;

    while (queue.size() > 0) {
        const length = queue.size();
        for (let i = 0; i < length; i++) {
            const [x, y] = queue.dequeue();
            if (x - 1 >= 0 && !visited[x - 1][y]) {
                if (grid[x - 1][y] === "#") {
                    return steps + 1;
                } else if (grid[x - 1][y] === "O") {
                    visited[x - 1][y] = true;
                    queue.enqueue([x - 1, y]);
                }
            }
            if (y - 1 >= 0 && !visited[x][y - 1]) {
                if (grid[x][y - 1] === "#") {
                    return steps + 1;
                } else if (grid[x][y - 1] === "O") {
                    visited[x][y - 1] = true;
                    queue.enqueue([x, y - 1]);
                }
            }
            if (x + 1 < m && !visited[x + 1][y]) {
                if (grid[x + 1][y] === "#") {
                    return steps + 1;
                } else if (grid[x + 1][y] === "O") {
                    visited[x + 1][y] = true;
                    queue.enqueue([x + 1, y]);
                }
            }
            if (y + 1 < n && !visited[x][y + 1]) {
                if (grid[x][y + 1] === "#") {
                    return steps + 1;
                } else if (grid[x][y + 1] === "O") {
                    visited[x][y + 1] = true;
                    queue.enqueue([x, y + 1]);
                }
            }
        }
        steps++;
    }

    return -1;
};