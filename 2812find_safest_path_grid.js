// https://leetcode.com/problems/find-the-safest-path-in-a-grid/

const { Queue } = require('@datastructures-js/queue');
const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

// Binary search

var maximumSafenessFactor = function(grid) {
    const queue = new Queue();
    const dist = Array(grid.length).fill().map(() => Array(grid[0].length).fill(-1));
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                queue.enqueue([i, j]);
                dist[i][j] = 0;
            }
        }
    }

    let distance = 1;

    while (!queue.isEmpty()) {
        const length = queue.size();
        for (let i = 0; i < length; i++) {
            const [x, y] = queue.dequeue();
            for (const [dx, dy] of directions) {
                const newX = x + dx;
                const newY = y + dy;
                if (newX >= 0 && newX < grid.length && newY >= 0 && newY < grid[0].length && dist[newX][newY] === -1) {
                    dist[newX][newY] = distance;
                    queue.enqueue([newX, newY]);
                }
            }
        }
        distance++;
    }

    let maxDist = 0;

    for (let i = 0; i < dist.length; i++) {
        for (let j = 0; j < dist[0].length; j++) {
            maxDist = Math.max(maxDist, dist[i][j]);
        }
    }

    let start = 0; 
    let end = maxDist;
    let ans = 0;

    while (start <= end) {
        const mid = Math.floor((end - start) / 2) + start;
        if (dist[0][0] < mid) {
            end = mid - 1;
            continue;
        }
        const queue = new Queue();
        queue.enqueue([0, 0]);
        const visited = Array(grid.length).fill().map(() => Array(grid[0].length).fill(false));
        visited[0][0] = true;
        let found = false;

        while (!queue.isEmpty()) {
            const length = queue.size();
            for (let i = 0; i < length; i++) {
                const [x, y] = queue.dequeue();

                if (x === grid.length - 1 && y === dist[0].length - 1) {
                    found = true;
                    break;
                }
                for (const [dx, dy] of directions) {
                    const newX = x + dx;
                    const newY = y + dy;
                    if (newX >= 0 && newX < grid.length && newY >= 0 && newY < grid[0].length && dist[newX][newY] >= mid && !visited[newX][newY]) {
                        queue.enqueue([newX, newY]);
                        visited[newX][newY] = true;
                    }
                }
            }
        }

        if (found) {
            ans = mid;
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return ans;
};


// Priority queue

var maximumSafenessFactor = function(grid) {
    if (grid.length === 1 && grid[0].length === 1) {
        return 0;
    }

    const queue = new Queue();
    const dist = Array(grid.length).fill().map(() => Array(grid[0].length).fill(-1));
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                queue.enqueue([i, j]);
                dist[i][j] = 0;
            }
        }
    }

    let distance = 1;

    while (!queue.isEmpty()) {
        const length = queue.size();
        for (let i = 0; i < length; i++) {
            const [x, y] = queue.dequeue();
            for (const [dx, dy] of directions) {
                const newX = x + dx;
                const newY = y + dy;
                if (newX >= 0 && newX < grid.length && newY >= 0 && newY < grid[0].length && dist[newX][newY] === -1) {
                    dist[newX][newY] = distance;
                    queue.enqueue([newX, newY]);
                }
            }
        }
        distance++;
    }

    const maxQueue = new MaxPriorityQueue(a => a[2]);
    maxQueue.enqueue([0, 0, dist[0][0]]);
    const visited = Array(grid.length).fill().map(() => Array(grid[0].length).fill(false));
    visited[0][0] = true;

    while (!maxQueue.isEmpty()) {
        const [x, y, minCost] = maxQueue.dequeue();
        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;
            if (newX >= 0 && newX < grid.length && newY >= 0 && newY < grid[0].length && !visited[newX][newY]) {
                if (newX === grid.length - 1 && newY === grid[0].length - 1) {
                    return Math.min(minCost, dist[newX][newY]);
                }
                visited[newX][newY] = true;
                maxQueue.enqueue([newX, newY, Math.min(minCost, dist[newX][newY])]);
            }
        }
    }
};


// var maximumSafenessFactor = function (grid) {
//     if (grid[0][0] === 1 || grid[grid.length - 1][grid.length - 1] === 1) return 0;

//     const queue = new Queue();

//     let visited = Array(grid.length).fill(false).map(() => Array(grid.length).fill(false));

//     for (let i = 0; i < grid.length; i++) {
//         for (let j = 0; j < grid.length; j++) {
//             if (grid[i][j] === 1) {
//                 queue.enqueue([i, j]);
//                 grid[i][j] = 0;
//                 visited[i][j] = true;
//             }
//         }
//     }

//     let level = 1;

//     while (!queue.isEmpty()) {
//         const length = queue.size();
//         for (let k = 0; k < length; k++) {
//             const [x, y] = queue.dequeue();
//             if (x - 1 >= 0 && !visited[x - 1][y]) {
//                 if (grid[x - 1][y] === 0) {
//                     grid[x - 1][y] = level;
//                 } else if (grid[x - 1][y] > 0) {
//                     grid[x - 1][y] = Math.min(level, grid[x - 1][y]);
//                 }
//                 queue.enqueue([x - 1, y]);
//                 visited[x - 1][y] = true;
//             }
//             if (x + 1 < grid.length && !visited[x + 1][y]) {
//                 if (grid[x + 1][y] === 0) {
//                     grid[x + 1][y] = level;
//                 } else if (grid[x + 1][y] > 0) {
//                     grid[x + 1][y] = Math.min(level, grid[x + 1][y]);
//                 }
//                 queue.enqueue([x + 1, y]);
//                 visited[x + 1][y] = true;
//             }
//             if (y - 1 >= 0 && !visited[x][y - 1]) {
//                 if (grid[x][y - 1] === 0) {
//                     grid[x][y - 1] = level;
//                 } else if (grid[x][y - 1] > 0) {
//                     grid[x][y - 1] = Math.min(level, grid[x][y - 1]);
//                 }
//                 queue.enqueue([x, y - 1]);
//                 visited[x][y - 1] = true;
//             }
//             if (y + 1 < grid.length && !visited[x][y + 1]) {
//                 if (grid[x][y + 1] === 0) {
//                     grid[x][y + 1] = level;
//                 } else if (grid[x][y + 1] > 0) {
//                     grid[x][y + 1] = Math.min(level, grid[x][y + 1]);
//                 }
//                 queue.enqueue([x, y + 1]);
//                 visited[x][y + 1] = true;
//             }
//         }
//         level++;
//     }

//     let maxLevel = 0;

//     for (let i = 0; i < grid.length; i++) {
//         for (let j = 0; j < grid.length; j++) {
//             maxLevel = Math.max(maxLevel, grid[i][j]);
//         }
//     }

//     let start = 0;
//     let end = maxLevel;
//     let res = 0;

//     while (start <= end) {
//         const mid = Math.floor((start + end) / 2);

//         let been = Array(grid.length).fill(false).map(() => Array(grid.length).fill(false));

//         const dfs = (x, y, mid) => {
//             if (x < 0 || y < 0 || x >= grid.length || y >= grid.length || been[x][y]) return false;

//             if (x === grid.length - 1 && y === grid.length - 1) {
//                 return grid[x][y] >= mid;
//             }

//             been[x][y] = true;

//             if (grid[x][y] < mid) return false;

//             return dfs(x + 1, y, mid) || dfs(x, y + 1, mid) || dfs(x - 1, y, mid) || dfs(x, y - 1, mid);
//         }

//         if (dfs(0, 0, mid)) {
//             res = mid;
//             start = mid + 1;
//         } else {
//             end = mid - 1;
//         }
//     }

//     return res;
// };