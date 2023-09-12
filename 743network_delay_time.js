// https://leetcode.com/problems/network-delay-time/

const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
const { Queue } = require ('@datastructures-js/queue');

// Dijkstra's Algorithm

var networkDelayTime = function(times, n, k) {
    let distancesFromk = {};
    distancesFromk[k] = 0;

    let connections = {};

    for (let i = 0; i < times.length; i++) {
        if (connections[times[i][0]]) {
            connections[times[i][0]].push([times[i][1], times[i][2]]);
        } else {
            connections[times[i][0]] = [[times[i][1], times[i][2]]];
        }
    }

    const minQueue = new MinPriorityQueue(a => a[1]);
    const start = connections[k];
    if (!start) return -1;

    for (let i = 0; i < start.length; i++) {
        minQueue.enqueue(start[i]);
    }

    while (!minQueue.isEmpty()) {
        const [to, dist] = minQueue.dequeue();

        if (distancesFromk.hasOwnProperty(to)) {
            continue;
        }

        distancesFromk[to] = dist;

        if (connections[to]) {
            for (let i = 0; i < connections[to].length; i++) {
                minQueue.enqueue([connections[to][i][0], connections[to][i][1] + dist]);
            }
        }
    }

    if (Object.keys(distancesFromk).length !== n) return -1;

    let res = 0;

    for (const dist in distancesFromk) {
        res = Math.max(res, distancesFromk[dist]);
    }

    return res;
};


// DFS

// var networkDelayTime = function (times, n, k) {
//     let connections = {};

//     for (let i = 0; i < times.length; i++) {
//         if (connections[times[i][0]]) {
//             connections[times[i][0]].push([times[i][1], times[i][2]]);
//         } else {
//             connections[times[i][0]] = [[times[i][1], times[i][2]]];
//         }
//     }

//     for (const node in connections) {
//         connections[node].sort((a, b) => a[1] - b[1]);
//     }

//     let distancesFromk = Array(n + 1).fill(Infinity);

//     const dfs = (node, time) => {
//         if (time >= distancesFromk[node]) return;

//         distancesFromk[node] = time;

//         if (connections[node]) {
//             for (let i = 0; i < connections[node].length; i++) {
//                 dfs(connections[node][i][0], connections[node][i][1] + time);
//             }
//         }
//     }

//     dfs(k, 0);

//     let maxDist = 0;

//     for (let i = 1; i < distancesFromk.length; i++) {
//         maxDist = Math.max(maxDist, distancesFromk[i]);
//     }

//     return maxDist === Infinity ? -1 : maxDist;
// };


// BFS

// var networkDelayTime = function (times, n, k) {
//     let connections = {};

//     for (let i = 0; i < times.length; i++) {
//         if (connections[times[i][0]]) {
//             connections[times[i][0]].push([times[i][1], times[i][2]]);
//         } else {
//             connections[times[i][0]] = [[times[i][1], times[i][2]]];
//         }
//     }

//     for (const node in connections) {
//         connections[node].sort((a, b) => a[1] - b[1]);
//     }

//     let distancesFromk = Array(n + 1).fill(Infinity);
//     distancesFromk[k] = 0;

//     const queue = new Queue();
//     queue.enqueue(k);

//     while (!queue.isEmpty()) {
//         const node = queue.dequeue();

//         if (connections[node]) {
//             for (let i = 0; i < connections[node].length; i++) {
//                 const neighborNode = connections[node][i][0];
//                 const addedTime = connections[node][i][1];
//                 if (distancesFromk[neighborNode] <= distancesFromk[node] + addedTime) continue;

//                 distancesFromk[neighborNode] = distancesFromk[node] + addedTime;
//                 queue.enqueue(neighborNode);
//             }
//         }
//     }

//     let maxDist = 0;

//     for (let i = 1; i < distancesFromk.length; i++) {
//         maxDist = Math.max(maxDist, distancesFromk[i]);
//     }

//     return maxDist === Infinity ? -1 : maxDist;
// };