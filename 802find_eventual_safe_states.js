// https://leetcode.com/problems/find-eventual-safe-states/

// Topological sort, Kahn's algorithm

const { Queue } = require('@datastructures-js/queue');

var eventualSafeNodes = function(graph) {
    let incomingNodes = Array(graph.length).fill().map(item => []);
    let numOfOutgoingNodes = Array(graph.length);

    for (let i = 0; i < graph.length; i++) {
        numOfOutgoingNodes[i] = graph[i].length;
        for (let j = 0; j < graph[i].length; j++) {
            incomingNodes[graph[i][j]].push(i);
        }
    }

    let ans = [];

    const queue = new Queue();

    for (let i = 0; i < numOfOutgoingNodes.length; i++) {
        if (numOfOutgoingNodes[i] === 0) {
            queue.enqueue(i);
            ans.push(i);
        }
    }

    while (!queue.isEmpty()) {
        const curr = queue.dequeue();
        for (let i = 0; i < incomingNodes[curr].length; i++) {
            numOfOutgoingNodes[incomingNodes[curr][i]]--;
            if (numOfOutgoingNodes[incomingNodes[curr][i]] === 0) {
                queue.enqueue(incomingNodes[curr][i]);
                ans.push(incomingNodes[curr][i]);
            }
        }
    }

    return ans.sort((a, b) => a - b);
};


// DFS

// var eventualSafeNodes = function(graph) {
//     let safe = new Set();
//     let unsafe = new Set();
    
//     const dfs = (node, visited) => {
//         if (safe.has(node)) {
//             return true;
//         }
//         if (visited.has(node)) {
//             unsafe.add(node);
//         }
//         if (unsafe.has(node)) {
//             return false;
//         }
//         visited.add(node);
//         let returnFalse = false;
//         for (let j = 0; j < graph[node].length; j++) {
//             if (!dfs(graph[node][j], visited)) {
//                 unsafe.add(graph[node][j]);
//                 returnFalse = true;
//             }
//         }
//         if (returnFalse) {
//             unsafe.add(node);
//             return false;
//         } else {
//             safe.add(node);
//             return true;
//         }
//     }

//     let ans = [];

//     for (let i = 0; i < graph.length; i++) {
//         let visited = new Set();
//         if (dfs(i, visited)) ans.push(i);
//     }

//     return ans;
// };