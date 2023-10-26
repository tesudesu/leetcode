// https://leetcode.com/problems/shortest-bridge/

const { Queue } = require('@datastructures-js/queue');

// BFS

var shortestBridge = function(grid) {
    const n = grid.length;
    let ownIsland = Array(n).fill().map(() => Array(n).fill(false));
    let foundIsland = false;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                const queue = new Queue();
                queue.enqueue([i, j]);
                ownIsland[i][j] = true;
                while (queue.size() > 0) {
                    const length = queue.size();
                    for (let k = 0; k < length; k++) {
                        const [x, y] = queue.dequeue();
                        if (x - 1 >= 0 && grid[x - 1][y] === 1 && !ownIsland[x - 1][y]) {
                            queue.enqueue([x - 1, y]);
                            ownIsland[x - 1][y] = true;
                        }
                        if (y - 1 >= 0 && grid[x][y - 1] === 1 && !ownIsland[x][y - 1]) {
                            queue.enqueue([x, y - 1]);
                            ownIsland[x][y - 1] = true;
                        }
                        if (x + 1 < n && grid[x + 1][y] === 1 && !ownIsland[x + 1][y]) {
                            queue.enqueue([x + 1, y]);
                            ownIsland[x + 1][y] = true;
                        }
                        if (y + 1 < n && grid[x][y + 1] === 1 && !ownIsland[x][y + 1]) {
                            queue.enqueue([x, y + 1]);
                            ownIsland[x][y + 1] = true;
                        }
                    }
                }
                foundIsland = true;
                break;
            }
        }
        if (foundIsland) break;
    }

    const queue = new Queue();

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (ownIsland[i][j]) {
                queue.enqueue([i, j]);
            }
        }
    }

    let ans = 0;

    while (queue.size() > 0) {
        const length = queue.size();
        ans++;
        for (let i = 0; i < length; i++) {
            const [x, y] = queue.dequeue();
            if (x - 1 >= 0 && !ownIsland[x - 1][y]) {
                if (grid[x - 1][y] === 1) {
                    return ans - 1;
                } else {
                    ownIsland[x - 1][y] = true;
                    queue.enqueue([x - 1, y]);
                }
            }
            if (y - 1 >= 0 && !ownIsland[x][y - 1]) {
                if (grid[x][y - 1] === 1) {
                    return ans - 1;
                } else {
                    ownIsland[x][y - 1] = true;
                    queue.enqueue([x, y - 1]);
                }
            }
            if (x + 1 < n && !ownIsland[x + 1][y]) {
                if (grid[x + 1][y] === 1) {
                    return ans - 1;
                } else {
                    ownIsland[x + 1][y] = true;
                    queue.enqueue([x + 1, y]);
                }
            }
            if (y + 1 < n && !ownIsland[x][y + 1]) {
                if (grid[x][y + 1] === 1) {
                    return ans - 1;
                } else {
                    ownIsland[x][y + 1] = true;
                    queue.enqueue([x, y + 1]);
                }
            }
        }
    }
};


// DFS to find own island, BFS to find next island

// var shortestBridge = function(grid) {
//     const n = grid.length;
//     let ownIsland = Array(n).fill().map(() => Array(n).fill(false));
//     let foundIsland = false;

//     const dfs = (x, y) => {
//         if (x < 0 || x >= n || y < 0 || y >= n) return;
//         if (grid[x][y] === 0 || ownIsland[x][y]) return;

//         ownIsland[x][y] = true;

//         dfs(x - 1, y);
//         dfs(x + 1, y);
//         dfs(x, y - 1);
//         dfs(x, y + 1);
//     }
    
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             if (grid[i][j] === 1) {
//                 dfs(i, j);
//                 foundIsland = true;
//                 break;
//             }
//         }
//         if (foundIsland) break;
//     }

//     const queue = new Queue();

//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             if (ownIsland[i][j]) {
//                 queue.enqueue([i, j]);
//             }
//         }
//     }

//     let ans = 0;

//     while (queue.size() > 0) {
//         const length = queue.size();
//         ans++;
//         for (let i = 0; i < length; i++) {
//             const [x, y] = queue.dequeue();
//             if (x - 1 >= 0 && !ownIsland[x - 1][y]) {
//                 if (grid[x - 1][y] === 1) {
//                     return ans - 1;
//                 } else {
//                     ownIsland[x - 1][y] = true;
//                     queue.enqueue([x - 1, y]);
//                 }
//             }
//             if (y - 1 >= 0 && !ownIsland[x][y - 1]) {
//                 if (grid[x][y - 1] === 1) {
//                     return ans - 1;
//                 } else {
//                     ownIsland[x][y - 1] = true;
//                     queue.enqueue([x, y - 1]);
//                 }
//             }
//             if (x + 1 < n && !ownIsland[x + 1][y]) {
//                 if (grid[x + 1][y] === 1) {
//                     return ans - 1;
//                 } else {
//                     ownIsland[x + 1][y] = true;
//                     queue.enqueue([x + 1, y]);
//                 }
//             }
//             if (y + 1 < n && !ownIsland[x][y + 1]) {
//                 if (grid[x][y + 1] === 1) {
//                     return ans - 1;
//                 } else {
//                     ownIsland[x][y + 1] = true;
//                     queue.enqueue([x, y + 1]);
//                 }
//             }
//         }
//     }
// };