// https://leetcode.com/problems/shortest-path-in-binary-matrix/

// BFS

const { Queue } = require('@datastructures-js/queue');

var shortestPathBinaryMatrix = function(grid) {
    if (grid[0][0] !== 0) return -1;
    let queue = new Queue();
    queue.enqueue([0, 0]);
    let visited = Array(grid.length).fill().map(() => Array(grid[0].length).fill(false));
    visited[0][0] = true;
    let directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

    let path = 1;

    while (!queue.isEmpty()) {
        const length = queue.size();
        for (let i = 0; i < length; i++) {
            const [x, y] = queue.dequeue();
            if (x === grid.length - 1 && y === grid[0].length - 1) {
                return path;
            }
            for (let j = 0; j < directions.length; j++) {
                const [dx, dy] = directions[j];
                if (x + dx >= 0 && x + dx < grid.length && y + dy >= 0 && y + dy < grid[0].length) {
                    if (grid[x + dx][y + dy] === 0 && !visited[x + dx][y + dy]) {
                        visited[x + dx][y + dy] = true;
                        queue.enqueue([x + dx, y + dy]);
                    }
                }
            }
        }
        path++;
    }

    return -1;
};


// var shortestPathBinaryMatrix = function(grid) {
//     if (grid[0][0] !== 0) return -1;
//     let queue = new Queue();
//     queue.enqueue([0, 0]);
//     let visited = Array(grid.length).fill().map(() => Array(grid[0].length).fill(false));
//     visited[0][0] = true;

//     let path = 1;

//     while (!queue.isEmpty()) {
//         const length = queue.size();
//         for (let i = 0; i < length; i++) {
//             const [x, y] = queue.dequeue();
//             if (x === grid.length - 1 && y === grid[0].length - 1) {
//                 return path;
//             }
//             if (x - 1 >= 0) {
//                 if (grid[x - 1][y] === 0 && !visited[x - 1][y]) {
//                     visited[x - 1][y] = true;
//                     queue.enqueue([x - 1, y]);
//                 }
//                 if (y - 1 >= 0 && grid[x - 1][y - 1] === 0 && !visited[x - 1][y - 1]) {
//                     visited[x - 1][y - 1] = true;
//                     queue.enqueue([x - 1, y - 1]);
//                 }
//                 if (y + 1 < grid[0].length && grid[x - 1][y + 1] === 0 && !visited[x - 1][y + 1]) {
//                     visited[x - 1][y + 1] = true;
//                     queue.enqueue([x - 1, y + 1]);
//                 }
//             }
//             if (y - 1 >= 0 && grid[x][y - 1] === 0 && !visited[x][y - 1]) {
//                 visited[x][y - 1] = true;
//                 queue.enqueue([x, y - 1]);
//             }
//             if (y + 1 < grid[0].length && grid[x][y + 1] === 0 && !visited[x][y + 1]) {
//                 visited[x][y + 1] = true;
//                 queue.enqueue([x, y + 1]);
//             }
//             if (x + 1 < grid.length) {
//                 if (grid[x + 1][y] === 0 && !visited[x + 1][y]) {
//                     visited[x + 1][y] = true;
//                     queue.enqueue([x + 1, y]);
//                 }
//                 if (y - 1 >= 0 && grid[x + 1][y - 1] === 0 && !visited[x + 1][y - 1]) {
//                     visited[x + 1][y - 1] = true;
//                     queue.enqueue([x + 1, y - 1]);
//                 }
//                 if (y + 1 < grid[0].length && grid[x + 1][y + 1] === 0 && !visited[x + 1][y + 1]) {
//                     visited[x + 1][y + 1] = true;
//                     queue.enqueue([x + 1, y + 1]);
//                 }
//             }
//         }
//         path++;
//     }

//     return -1;
// };


// A*

const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

var shortestPathBinaryMatrix = function (grid) {
    if (grid[0][0] !== 0 || grid[grid.length - 1][grid[0].length - 1] !== 0) return -1;

    let directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

    let visited = Array(grid.length).fill().map(() => Array(grid[0].length).fill(false));

    const bestCaseEstimate = (x, y) => {
        return Math.max(grid.length - x, grid[0].length - y);
    }

    const minQueue = new MinPriorityQueue(a => a[0]);
    minQueue.enqueue([bestCaseEstimate(0, 0), 1, 0, 0]);

    while (!minQueue.isEmpty()) {
        const [bestDistToTarget, distSoFar, x, y] = minQueue.dequeue();
        if (x === grid.length - 1 && y === grid[0].length - 1) {
            return distSoFar;
        }
        if (visited[x][y]) continue;
        visited[x][y] = true;

        for (let i = 0; i < directions.length; i++) {
            const [dx, dy] = directions[i];
            if (x + dx >= 0 && x + dx < grid.length && y + dy >= 0 && y + dy < grid[0].length) {
                if (grid[x + dx][y + dy] === 0 && !visited[x + dx][y + dy]) {
                    minQueue.enqueue([1 + distSoFar + bestCaseEstimate(x + dx, y + dy), distSoFar + 1, x + dx, y + dy]);
                }
            }
        }
    }

    return -1;
};