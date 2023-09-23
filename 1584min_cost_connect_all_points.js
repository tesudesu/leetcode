// https://leetcode.com/problems/min-cost-to-connect-all-points/

const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

var minCostConnectPoints = function(points) {
    const calculateDistance = (x, y) => {
        return Math.abs(x[0] - y[0]) + Math.abs(x[1] - y[1]);
    }

    let matrix = Array(points.length).fill().map(() => Array(points.length).fill(Infinity));

    for (let i = 0; i < points.length; i++) {
        for (let j = 0; j < points.length; j++) {
            if (i === j) continue;
            matrix[i][j] = calculateDistance(points[i], points[j]);
        }
    }

    const visited = new Set();
    visited.add(0);
    const minQueue = new MinPriorityQueue(a => a[0]);
    for (let i = 1; i < matrix.length; i++) {
        minQueue.enqueue([matrix[0][i], i]);
    }
    let ans = 0;

    while (visited.size < points.length) {
        const [cost, point] = minQueue.dequeue();
        if (visited.has(point)) continue;
        ans += cost;
        visited.add(point);
        for (let i = 0; i < matrix.length; i++) {
            if (i === point || visited.has(i)) continue;
            minQueue.enqueue([matrix[point][i], i]);
        }
    }

    return ans;
};


// var minCostConnectPoints = function(points) {
//     const calculateDistance = (x, y) => {
//         return Math.abs(x[0] - y[0]) + Math.abs(x[1] - y[1]);
//     }

//     let matrix = Array(points.length).fill().map(() => Array(points.length).fill(Infinity));

//     for (let i = 0; i < points.length; i++) {
//         for (let j = 0; j < points.length; j++) {
//             if (i === j) continue;
//             matrix[i][j] = calculateDistance(points[i], points[j]);
//         }
//     }

//     let cost = 0;
//     let dist = Array(points.length).fill(Infinity);
//     dist[0] = 0;
//     let next = 0;

//     for (let i = 1; i < points.length; i++) {
//         let min = Infinity;
//         let point;
//         for (let j = 1; j < points.length; j++) {
//             if (dist[j] > 0) {
//                 dist[j] = Math.min(dist[j], matrix[j][next]);
//                 if (dist[j] < min) {
//                     min = dist[j];
//                     point = j;
//                 }
//             }
//         }
//         cost += min;
//         dist[point] = 0;
//         next = point;
//     }

//     return cost;
// };