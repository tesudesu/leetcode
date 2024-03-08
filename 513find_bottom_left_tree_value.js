// https://leetcode.com/problems/find-bottom-left-tree-value/

// DFS

var findBottomLeftValue = function(root) {
    let val = root.val;
    let lowestLevel = 0;

    const dfs = (node, lvl) => {
        if (lvl > lowestLevel) {
            lowestLevel = lvl;
            val = node.val;
        }

        if (node.left) {
            dfs(node.left, lvl + 1);
        }
        if (node.right) {
            dfs(node.right, lvl + 1);
        }
    }

    dfs(root, 0);

    return val;
};


// BFS

const { Queue } = require('@datastructures-js/queue');

var findBottomLeftValue = function(root) {
    const queue = new Queue();
    queue.enqueue(root);
    let ans;

    while (queue.size() > 0) {
        const length = queue.size();
        for (let i = 0; i < length; i++) {
            const curr = queue.dequeue();
            ans = curr.val;
            if (curr.right) {
                queue.enqueue(curr.right);
            }
            if (curr.left) {
                queue.enqueue(curr.left);
            }
        }
    }

    return ans;
};


var findBottomLeftValue = function(root) {
    const queue = new Queue();
    queue.enqueue(root);
    let curr;

    while (queue.size() > 0) {
        curr = queue.dequeue();
        if (curr.right) {
            queue.enqueue(curr.right);
        }
        if (curr.left) {
            queue.enqueue(curr.left);
        }
    }

    return curr.val;
};