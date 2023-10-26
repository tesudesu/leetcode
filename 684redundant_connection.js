// https://leetcode.com/problems/redundant-connection/

var findRedundantConnection = function (edges) {
    const edgesTo = new Map();

    for (let i = 0; i < edges.length; i++) {
        const [x, y] = edges[i];
        if (edgesTo.has(x)) {
            let arr = edgesTo.get(x);
            arr.push(y);
            edgesTo.set(x, arr);
        } else {
            edgesTo.set(x, [y]);
        }
        if (edgesTo.has(y)) {
            let arr = edgesTo.get(y);
            arr.push(x);
            edgesTo.set(y, arr);
        } else {
            edgesTo.set(y, [x]);
        }
    }

    const isElseConnected = (x, y, visited, original) => {
        if (visited.has(x)) return;
        visited.add(x);
        const connectedEdges = edgesTo.get(x);
        for (let i = 0; i < connectedEdges.length; i++) {
            if (connectedEdges[i] === y && x === original) continue;
            if (connectedEdges[i] === y && x !== original) return true;
            if (isElseConnected(connectedEdges[i], y, visited, original)) return true;
        }
    }

    for (let i = edges.length - 1; i >= 0; i--) {
        const [x, y] = edges[i];
        const visited = new Set();

        if (isElseConnected(x, y, visited, x)) return edges[i];
    }
};


// var findRedundantConnection = function(edges) {
//     const edgesTo = new Map();

//     const isConnected = (x, y, visited) => {
//         if (!edgesTo.has(x)) {
//             return false;
//         }
//         if (visited.has(x)) return;
//         visited.add(x);
//         const connectedEdges = edgesTo.get(x);
//         for (let i = 0; i < connectedEdges.length; i++) {
//             if (connectedEdges[i] === y) {
//                 return true;
//             }
//             if (isConnected(connectedEdges[i], y, visited)) {
//                 return true;
//             }
//         }
//     }

//     for (let i = 0; i < edges.length; i++) {
//         const [x, y] = edges[i];
//         const visited = new Set();

//         if (isConnected(x, y, visited)) return edges[i];

//         if (edgesTo.has(x)) {
//             let arr = edgesTo.get(x);
//             arr.push(y);
//             edgesTo.set(x, arr);
//         } else {
//             edgesTo.set(x, [y]);
//         }
//         if (edgesTo.has(y)) {
//             let arr = edgesTo.get(y);
//             arr.push(x);
//             edgesTo.set(y, arr);
//         } else {
//             edgesTo.set(y, [x]);
//         }
//     }
// };