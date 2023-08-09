// https://leetcode.com/problems/find-the-safest-path-in-a-grid/

const { Queue } = require('@datastructures-js/queue');

var maximumSafenessFactor = function (grid) {
    if (grid[0][0] === 1 || grid[grid.length - 1][grid.length - 1] === 1) return 0;

    const queue = new Queue();

    let visited = Array(grid.length).fill(false).map(() => Array(grid.length).fill(false));

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            if (grid[i][j] === 1) {
                queue.enqueue([i, j]);
                grid[i][j] = 0;
                visited[i][j] = true;
            }
        }
    }

    let level = 1;

    while (!queue.isEmpty()) {
        const length = queue.size();
        for (let k = 0; k < length; k++) {
            const [x, y] = queue.dequeue();
            if (x - 1 >= 0 && !visited[x - 1][y]) {
                if (grid[x - 1][y] === 0) {
                    grid[x - 1][y] = level;
                } else if (grid[x - 1][y] > 0) {
                    grid[x - 1][y] = Math.min(level, grid[x - 1][y]);
                }
                queue.enqueue([x - 1, y]);
                visited[x - 1][y] = true;
            }
            if (x + 1 < grid.length && !visited[x + 1][y]) {
                if (grid[x + 1][y] === 0) {
                    grid[x + 1][y] = level;
                } else if (grid[x + 1][y] > 0) {
                    grid[x + 1][y] = Math.min(level, grid[x + 1][y]);
                }
                queue.enqueue([x + 1, y]);
                visited[x + 1][y] = true;
            }
            if (y - 1 >= 0 && !visited[x][y - 1]) {
                if (grid[x][y - 1] === 0) {
                    grid[x][y - 1] = level;
                } else if (grid[x][y - 1] > 0) {
                    grid[x][y - 1] = Math.min(level, grid[x][y - 1]);
                }
                queue.enqueue([x, y - 1]);
                visited[x][y - 1] = true;
            }
            if (y + 1 < grid.length && !visited[x][y + 1]) {
                if (grid[x][y + 1] === 0) {
                    grid[x][y + 1] = level;
                } else if (grid[x][y + 1] > 0) {
                    grid[x][y + 1] = Math.min(level, grid[x][y + 1]);
                }
                queue.enqueue([x, y + 1]);
                visited[x][y + 1] = true;
            }
        }
        level++;
    }

    let maxLevel = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            maxLevel = Math.max(maxLevel, grid[i][j]);
        }
    }

    let start = 0;
    let end = maxLevel;
    let res = 0;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        let been = Array(grid.length).fill(false).map(() => Array(grid.length).fill(false));

        const dfs = (x, y, mid) => {
            if (x < 0 || y < 0 || x >= grid.length || y >= grid.length || been[x][y]) return false;

            if (x === grid.length - 1 && y === grid.length - 1) {
                return grid[x][y] >= mid;
            }

            been[x][y] = true;

            if (grid[x][y] < mid) return false;

            return dfs(x + 1, y, mid) || dfs(x, y + 1, mid) || dfs(x - 1, y, mid) || dfs(x, y - 1, mid);
        }

        if (dfs(0, 0, mid)) {
            res = mid;
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return res;
};