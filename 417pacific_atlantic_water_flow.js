// https://leetcode.com/problems/pacific-atlantic-water-flow/

// BFS

const { Queue } = require('@datastructures-js/queue');

var pacificAtlantic = function (heights) {
    let pacific = Array(heights.length).fill().map(() => Array(heights[0].length).fill(false));
    let atlantic = Array(heights.length).fill().map(() => Array(heights[0].length).fill(false));

    const runqueue = (x, y, ocean, queue) => {
        queue.enqueue([x, y]);
        ocean[x][y] = true;
        while (queue.size() > 0) {
            const [x, y] = queue.dequeue();
            if (x - 1 >= 0 && heights[x][y] <= heights[x - 1][y] && !ocean[x - 1][y]) {
                queue.enqueue([x - 1, y]);
                ocean[x - 1][y] = true;
            }
            if (x + 1 < heights.length && heights[x][y] <= heights[x + 1][y] && !ocean[x + 1][y]) {
                queue.enqueue([x + 1, y]);
                ocean[x + 1][y] = true;
            }
            if (y - 1 >= 0 && heights[x][y] <= heights[x][y - 1] && !ocean[x][y - 1]) {
                queue.enqueue([x, y - 1]);
                ocean[x][y - 1] = true;
            }
            if (y + 1 < heights[0].length && heights[x][y] <= heights[x][y + 1] && !ocean[x][y + 1]) {
                queue.enqueue([x, y + 1]);
                ocean[x][y + 1] = true;
            }
        }
    }

    const queue = new Queue();

    // check pacific
    for (let i = 0; i < heights[0].length; i++) {
        runqueue(0, i, pacific, queue);
    }

    for (let i = 0; i < heights.length; i++) {
        runqueue(i, 0, pacific, queue);
    }

    // check atlantic
    for (let i = 0; i < heights[0].length; i++) {
        runqueue(heights.length - 1, i, atlantic, queue);
    }

    for (let i = 0; i < heights.length; i++) {
        runqueue(i, heights[0].length - 1, atlantic, queue);
    }

    let ans = [];

    for (let i = 0; i < heights.length; i++) {
        for (let j = 0; j < heights[0].length; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                ans.push([i, j]);
            }
        }
    }

    return ans;
};


// DFS

// var pacificAtlantic = function(heights) {
//     let pacific = Array(heights.length).fill().map(() => Array(heights[0].length).fill(false));
//     let atlantic = Array(heights.length).fill().map(() => Array(heights[0].length).fill(false));

//     const dfs = (x, y, ocean, prev) => {
//         if (x < 0 || x === heights.length || y < 0 || y === heights[0].length) {
//             return;
//         }
//         if (ocean[x][y]) return;

//         if (heights[x][y] >= prev) {
//             ocean[x][y] = true;
//             dfs(x - 1, y, ocean, heights[x][y]);
//             dfs(x + 1, y, ocean, heights[x][y]);
//             dfs(x, y - 1, ocean, heights[x][y]);
//             dfs(x, y + 1, ocean, heights[x][y]);
//         }
//     }

//     for (let i = 0; i < heights[0].length; i++) {
//         dfs(0, i, pacific, 0);
//         dfs(heights.length - 1, i, atlantic, 0);
//     }

//     for (let i = 0; i < heights.length; i++) {
//         dfs(i, 0, pacific, 0);
//         dfs(i, heights[0].length - 1, atlantic, 0);
//     }

//     let ans = [];

//     for (let i = 0; i < heights.length; i++) {
//         for (let j = 0; j < heights[0].length; j++) {
//             if (pacific[i][j] && atlantic[i][j]) {
//                 ans.push([i, j]);
//             }
//         }
//     }

//     return ans;
// };