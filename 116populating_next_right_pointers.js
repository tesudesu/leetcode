// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/

// DFS

var connect = function(root) {
    if (!root) return null;

    const dfs = (node) => {
        if (node.left) {
            node.left.next = node.right;
            if (node.next) {
                node.right.next = node.next.left;
            }
            dfs(node.left);
            dfs(node.right);
        }
    }

    dfs(root);

    return root;
};


// BFS

// const { Queue } = require('@datastructures-js/queue');

// var connect = function(root) {
//     if (!root) return null;

//     let queue = new Queue();
//     queue.enqueue(root);

//     while (!queue.isEmpty()) {
//         const length = queue.size();
//         let curr = queue.dequeue();
//         if (curr.left) {
//             queue.enqueue(curr.left);
//         }
//         if (curr.right) {
//             queue.enqueue(curr.right);
//         }
//         for (let i = 1; i < length; i++) {
//             let next = queue.dequeue();
//             if (next.left) {
//                 queue.enqueue(next.left);
//             }
//             if (next.right) {
//                 queue.enqueue(next.right);
//             }
//             curr.next = next;
//             curr = next;
//         }
//         curr.next = null;
//     }

//     return root;
// };


// var connect = function(root) {
//     if (!root) return null;

//     let stack = [root];

//     while (stack.length > 0) {
//         const length = stack.length;
//         let curr = stack.shift();
//         if (curr.left) {
//             stack.push(curr.left);
//         }
//         if (curr.right) {
//             stack.push(curr.right);
//         }
//         for (let i = 1; i < length; i++) {
//             let next = stack.shift();
//             if (next.left) {
//                 stack.push(next.left);
//             }
//             if (next.right) {
//                 stack.push(next.right);
//             }
//             curr.next = next;
//             curr = next;
//         }
//         curr.next = null;
//     }

//     return root;
// };