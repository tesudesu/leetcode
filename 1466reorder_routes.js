// https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/

// BFS

const { Queue } = require('@datastructures-js/queue');

var minReorder = function(n, connections) {
    let reorders = 0;
    let visited = new Set();
    let to = {};
    let from = {};

    for (let i = 0; i < connections.length; i++) {
        if (!to[connections[i][0]]) {
            to[connections[i][0]] = [connections[i][1]];
        } else {
            to[connections[i][0]].push(connections[i][1]);
        }

        if (!from[connections[i][1]]) {
            from[connections[i][1]] = [connections[i][0]];
        } else {
            from[connections[i][1]].push(connections[i][0]);
        }
    }

    const queue = new Queue();
    queue.enqueue(0);

    while (queue.size() > 0) {
        const city = queue.dequeue();
        visited.add(city);

        const toCities = to[city];
        const fromCities = from[city];

        if (toCities) {
            for (let i = 0; i < toCities.length; i++) {
                if (!visited.has(toCities[i])) {
                    queue.enqueue(toCities[i]);
                    reorders++;
                }
            }
        }
        
        if (fromCities) {
            for (let i = 0; i < fromCities.length; i++) {
                if (!visited.has(fromCities[i])) {
                    queue.enqueue(fromCities[i]);
                }
            }
        }
    }

    return reorders;
};


// DFS

// var minReorder = function(n, connections) {
//     let reorders = 0;
//     let visited = new Set([0]);
//     let to = {};
//     let from = {};

//     for (let i = 0; i < connections.length; i++) {
//         if (!to[connections[i][0]]) {
//             to[connections[i][0]] = [connections[i][1]];
//         } else {
//             to[connections[i][0]].push(connections[i][1]);
//         }

//         if (!from[connections[i][1]]) {
//             from[connections[i][1]] = [connections[i][0]];
//         } else {
//             from[connections[i][1]].push(connections[i][0]);
//         }
//     }

//     const dfs = (city) => {
//         visited.add(city);

//         const toCities = to[city];
//         const fromCities = from[city];

//         if (toCities) {
//             for (let i = 0; i < toCities.length; i++) {
//                 if (!visited.has(toCities[i])) {
//                     reorders++;
//                     dfs(toCities[i]);
//                 }
//             }
//         }

//         if (fromCities) {
//             for (let i = 0; i < fromCities.length; i++) {
//                 if (!visited.has(fromCities[i])) {
//                     dfs(fromCities[i]);
//                 }
//             }
//         }
//     }
    
//     for (let i = 0; i < connections.length; i++) {
//         if (connections[i][0] === 0) {
//             reorders++;
//             if (!visited.has(connections[i][1])) dfs(connections[i][1]);
//         } else if (connections[i][1] === 0) {
//             if (!visited.has(connections[i][0])) dfs(connections[i][0]);
//         }
//     }

//     return reorders;
// };


// TLE

// var minReorder = function(n, connections) {
//     let reorders = 0;
//     let visited = new Set([0]);

//     const dfs = (city) => {
//         visited.add(city);
//         for (let i = 0; i < connections.length; i++) {
//             if (connections[i][0] === city && !visited.has(connections[i][1])) {
//                 visited.add(connections[i][1]);
//                 reorders++;
//                 dfs(connections[i][1]);
//             } else if (connections[i][1] === city && !visited.has(connections[i][0])) {
//                 visited.add(connections[i][0]);
//                 dfs(connections[i][0]);
//             }
//         }
//     }
    
//     for (let i = 0; i < connections.length; i++) {
//         if (connections[i][0] === 0) {
//             reorders++;
//             dfs(connections[i][1]);
//         } else if (connections[i][1] === 0) {
//             dfs(connections[i][0]);
//         }
//     }

//     return reorders;
// };