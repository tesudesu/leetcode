// https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/

const { Queue } = require('@datastructures-js/queue');

var amountOfTime = function (root, start) {
    const map = new Map();

    const dfs = (node) => {
        if (node.left) {
            if (map.has(node.val)) {
                let arr = map.get(node.val);
                arr.push(node.left.val);
                map.set(node.val, arr);
            } else {
                map.set(node.val, [node.left.val]);
            }

            map.set(node.left.val, [node.val]);

            dfs(node.left);
        }

        if (node.right) {
            if (map.has(node.val)) {
                let arr = map.get(node.val);
                arr.push(node.right.val);
                map.set(node.val, arr);
            } else {
                map.set(node.val, [node.right.val]);
            }

            map.set(node.right.val, [node.val]);

            dfs(node.right);
        }
    }

    dfs(root);

    if (!map.has(start)) return 0;

    const queue = new Queue();
    queue.enqueue(start);

    const visited = new Set();
    visited.add(start);

    let levels = 0;

    while (!queue.isEmpty()) {
        const length = queue.size();
        for (let i = 0; i < length; i++) {
            const curr = queue.dequeue();
            if (map.has(curr)) {
                const nextNodes = map.get(curr);
                for (let j = 0; j < nextNodes.length; j++) {
                    if (visited.has(nextNodes[j])) continue;
                    queue.enqueue(nextNodes[j]);
                    visited.add(nextNodes[j]);
                }
            }
        }
        levels++;
    }
    
    return levels - 1;
};