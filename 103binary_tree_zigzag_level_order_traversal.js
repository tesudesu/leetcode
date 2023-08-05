// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

const { Queue } = require('@datastructures-js/queue');

var zigzagLevelOrder = function(root) {
    if (!root) return [];

    let ans = [];

    const queue = new Queue();
    queue.enqueue(root);

    let alternate = false;

    while (!queue.isEmpty()) {
        const length = queue.size();
        let level = []; 
        for (let i = 0; i < length; i++) {
            const curr = queue.dequeue();
            if (curr.left) queue.enqueue(curr.left);
            if (curr.right) queue.enqueue(curr.right);
            level.push(curr.val);
        }
        if (alternate) {
            level.reverse();
            alternate = false;
        } else {
            alternate = true;
        }
        ans.push(level);
    }

    return ans;
};