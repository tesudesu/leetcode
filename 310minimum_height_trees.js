// https://leetcode.com/problems/minimum-height-trees/

var findMinHeightTrees = function(n, edges) {
    if (n <= 2) {
        let ans = [];
        for (let i = 0; i < n; i++) {
            ans.push(i);
        }
        return ans;
    }

    const map = new Map();
    const connectors = Array(n).fill(0);
    for (const [a, b] of edges) {
        if (map.has(a)) {
            let arr = map.get(a);
            arr.push(b);
            map.set(a, arr);
        } else {
            map.set(a, [b]);
        }
        if (map.has(b)) {
            let arr = map.get(b);
            arr.push(a);
            map.set(b, arr);
        } else {
            map.set(b, [a]);
        }
        connectors[a]++;
        connectors[b]++;
    }

    const visited = Array(n).fill(false);
    const leaves = new Queue();
    for (let i = 0; i < connectors.length; i++) {
        if (connectors[i] === 1) {
            leaves.enqueue(i);
            visited[i] = true;
        }
    }

    let nodesLeft = n;

    while (nodesLeft > 2) {
        const length = leaves.size();
        for (let i = 0; i < length; i++) {
            const curr = leaves.dequeue();
            const nextNodes = map.get(curr);
            for (const nextNode of nextNodes) {
                if (visited[nextNode]) continue;
                connectors[nextNode]--
                if (connectors[nextNode] === 1) {
                    connectors[nextNode]--;
                    leaves.enqueue(nextNode);
                    visited[nextNode] = true;
                }
            }
        }
        nodesLeft -= length;
    }

    let ans = [];
    while (leaves.size() > 0) {
        ans.push(leaves.dequeue());
    }

    return ans;
};


// Brute force

// var findMinHeightTrees = function(n, edges) {
//     const map = new Map();
//     for (const [a, b] of edges) {
//         if (map.has(a)) {
//             let arr = map.get(a);
//             arr.push(b);
//             map.set(a, arr);
//         } else {
//             map.set(a, [b]);
//         }
//         if (map.has(b)) {
//             let arr = map.get(b);
//             arr.push(a);
//             map.set(b, arr);
//         } else {
//             map.set(b, [a]);
//         }
//     }

//     const heights = Array(n).fill(Infinity);
//     let minHeight = Infinity;
    
//     for (let i = 0; i < n; i++) {
//         const visited = new Set();
//         const queue = new Queue();
//         let height = 0;
//         queue.enqueue(i);
//         visited.add(i);
//         while (visited.size < n) {
//             const length = queue.size();
//             for (let j = 0; j < length; j++) {
//                 const curr = queue.dequeue();
//                 const nextNodes = map.get(curr);
//                 for (const nextNode of nextNodes) {
//                     if (!visited.has(nextNode)) {
//                         queue.enqueue(nextNode);
//                         visited.add(nextNode);
//                     }
//                 }
//             }
//             height++;
//         }
//         heights[i] = height;
//         if (height < minHeight) {
//             minHeight = height;
//         }
//     }

//     let ans = [];

//     for (let i = 0; i < heights.length; i++) {
//         if (heights[i] === minHeight) {
//             ans.push(i);
//         }
//     }

//     return ans;
// };