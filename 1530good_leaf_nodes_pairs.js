// https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/

var countPairs = function(root, distance) {
    let pairs = 0;

    const dfs = (node) => {
        if (!node) return;

        if (!node.left && !node.right) {
            return [1];
        }

        let left = [];
        let right = [];

        if (node.left) {
            left = dfs(node.left);
        }
        if (node.right) {
            right = dfs(node.right);
        }

        for (let i = 0; i < right.length; i++) {
            for (let j = 0; j < left.length; j++) {
                if (right[i] + left[j] <= distance) {
                    pairs++;
                }
            }
        }

        let merge = [...left, ...right];
        for (let i = 0; i < merge.length; i++) {
            merge[i] += 1;
        }

        return merge;
    }

    dfs(root);

    return pairs;
};


// var countPairs = function(root, distance) {
//     let pairs = 0;

//     const dfs = (node) => {
//         if (!node) return [];

//         if (!node.left && !node.right) {
//             return [1];
//         }

//         let left = dfs(node.left);
//         let right = dfs(node.right);

//         for (let i = 0; i < left.length; i++) {
//             for (let j = 0; j < right.length; j++) {
//                 const tot = left[i] + right[j];
//                 if (tot <= distance) {
//                     pairs++;
//                 }
//             }
//         }

//         let newDist = [];

//         for (let i = 0; i < left.length; i++) {
//             if (left[i] + 1 < distance) {
//                 newDist.push(left[i] + 1);
//             }
//         }

//         for (let i = 0; i < right.length; i++) {
//             if (right[i] + 1 < distance) {
//                 newDist.push(right[i] + 1);
//             }
//         }

//         return newDist;
//     }

//     dfs(root);

//     return pairs;
// };


// BFS from leaf

var countPairs = function(root, distance) {
    const leaves = new Set();
    const map = new Map();

    const dfs = (node) => {
        if (!node.left && !node.right) {
            leaves.add(node);
        }

        if (node.left) {
            if (map.has(node)) {
                let neighbors = map.get(node);
                neighbors.push(node.left);
                map.set(node, neighbors);
            } else {
                map.set(node, [node.left]);
            }
            if (map.has(node.left)) {
                let neighbors = map.get(node.left);
                neighbors.push(node);
                map.set(node.left, neighbors);
            } else {
                map.set(node.left, [node]);
            }
            dfs(node.left);
        }

        if (node.right) {
            if (map.has(node)) {
                let neighbors = map.get(node);
                neighbors.push(node.right);
                map.set(node, neighbors);
            } else {
                map.set(node, [node.right]);
            }
            if (map.has(node.right)) {
                let neighbors = map.get(node.right);
                neighbors.push(node);
                map.set(node.right, neighbors);
            } else {
                map.set(node.right, [node]);
            }
            dfs(node.right);
        }
    }

    dfs(root);

    let pairs = 0;

    for (const leaf of leaves) {
        const queue = new Queue();
        queue.enqueue(leaf);
        const visited = new Set();
        visited.add(leaf);
        let dist = 1;

        while (!queue.isEmpty()) {
            const length = queue.size();
            for (let i = 0; i < length; i++) {
                const curr = queue.dequeue();
                if (!map.has(curr)) continue;
                const neighbors = map.get(curr);
                for (let j = 0; j < neighbors.length; j++) {
                    if (visited.has(neighbors[j])) continue;
                    if (leaves.has(neighbors[j])) {
                        pairs++;
                    } else {
                        queue.enqueue(neighbors[j]);
                        visited.add(neighbors[j]);
                    }
                }
            }
            if (dist + 1 > distance) {
                break;
            }
            dist++;
        }
    }

    return pairs / 2;
};