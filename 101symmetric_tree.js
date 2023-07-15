// https://leetcode.com/problems/symmetric-tree/

const { Queue } = require('@datastructures-js/queue');

// DFS

var isSymmetric = function(root) {
    if (!root) return true;

    const dfs = (left, right) => {
        if (!left && !right) return true;
        if (!left || !right || left.val !== right.val) return false;

        return dfs(left.left, right.right) && dfs(left.right, right.left);
    }
    
    return dfs(root.left, root.right);
};

// BFS

// var isSymmetric = function(root) {
//     let queue = new Queue();
//     queue.enqueue(root.left);
//     queue.enqueue(root.right);

//     while (!queue.isEmpty()) {
//         const leftNode = queue.dequeue();
//         const rightNode = queue.dequeue();

//         if (!leftNode && !rightNode) continue;

//         if (!leftNode || !rightNode || leftNode.val !== rightNode.val) return false;

//         queue.enqueue(leftNode.left);
//         queue.enqueue(rightNode.right);
//         queue.enqueue(leftNode.right);
//         queue.enqueue(rightNode.left);
//     }

//     return true;
// };


// var isSymmetric = function(root) {
//     let queue = new Queue();
//     queue.enqueue(root);

//     while (!queue.isEmpty()) {
//         const currLength = queue.size();
//         let arr = [];
//         let hasValue = false;
//         for (let i = 0; i < currLength; i++) {
//             const node = queue.dequeue();
//             if (node === null) {
//                 queue.enqueue(null);
//                 queue.enqueue(null);
//                 arr.push(null);
//             } else {
//                 if (node.left) {
//                     queue.enqueue(node.left);
//                     hasValue = true;
//                 } else {
//                     queue.enqueue(null);
//                 }
//                 if (node.right) {
//                     queue.enqueue(node.right);
//                     hasValue = true;
//                 } else {
//                     queue.enqueue(null);
//                 }
//                 arr.push(node.val);
//             }
//         }

//         for (let i = 0; i < arr.length / 2; i++) {
//             if (arr[i] !== arr[arr.length - 1 - i]) return false;
//         }

//         if (!hasValue) break;
//     }

//     return true;
// };


// var isSymmetric = function(root) {
//     let queue = new Queue();
//     queue.enqueue(root);

//     while (!queue.isEmpty()) {
//         const currLength = queue.size();
//         let arr = [];
//         let hasValue = false;
//         for (let i = 0; i < currLength; i++) {
//             const node = queue.dequeue();
//             if (node !== null && node.left) {
//                 queue.enqueue(node.left);
//                 arr.push(node.left.val);
//                 hasValue = true;
//             } else {
//                 queue.enqueue(null);
//                 arr.push(null);
//             }
//             if (node !== null && node.right) {
//                 queue.enqueue(node.right);
//                 arr.push(node.right.val);
//                 hasValue = true;
//             } else {
//                 queue.enqueue(null);
//                 arr.push(null);
//             }
//         }
        
//         for (let i = 0; i < arr.length / 2; i++) {
//             if (arr[i] !== arr[arr.length - 1 - i]) return false;
//         }

//         if (!hasValue) break;
//     }

//     return true;
// };