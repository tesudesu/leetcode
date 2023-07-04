// https://leetcode.com/problems/binary-tree-level-order-traversal/

const { queue } = require('@datastructures-js/queue');

// QUEUE

var levelOrder = function(root) {
    if (root === null) return [];

    let ans = [];
    let queue = new Queue([root]);

    while (queue.size() > 0) {
        const size = queue.size();
        let add = [];
        for (let i = 0; i < size; i++) {
            const curr = queue.dequeue();
            if (curr) {
                add.push(curr.val);
            } 
            if (curr.left) {
                queue.enqueue(curr.left);
            } 
            if (curr.right) {
                queue.enqueue(curr.right);
            }
        }
        ans.push(add);
    }
    return ans;
};

// STACK

// var levelOrder = function(root) {
//     if (root === null) return [];

//     let ans = [];
//     let stack = [root];

//     while (stack.length > 0) {
//         let newlevel = [];
//         let add = [];
//         while (stack.length > 0) {
//             const curr = stack.shift();
//             if (curr) {
//                 add.push(curr.val);
//             } 
//             if (curr.left) {
//                 newlevel.push(curr.left);
//             } 
//             if (curr.right) {
//                 newlevel.push(curr.right);
//             }
//         }
//         ans.push(add);
//         stack = newlevel;
//     }
//     return ans;
// };