// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

// Recursive

var kthSmallest = function(root, k) {
    let arr = [];

    const dfs = (node) => {
        if (arr.length >= k) return;
        if (node.left) {
            dfs(node.left);
        }
        arr.push(node.val);
        if (node.right) {
            dfs(node.right);
        }
    }

    dfs(root);

    return arr[k - 1];
};


// Iterative

// var kthSmallest = function(root, k) {
//     let stack = [root];
//     const visited = new Set();
//     visited.add(root);

//     while (stack.length > 0) {
//         const last = stack[stack.length - 1];
//         if (last.left && !visited.has(last.left)) {
//             stack.push(last.left);
//             visited.add(last.left);
//         } else {
//             const curr = stack.pop();
//             k--;
//             if (k === 0) return curr.val;
//             if (curr.right) {
//                 stack.push(curr.right);
//             }
//         }
//     }
// };


// var kthSmallest = function(root, k) {
//     let stack = [];
//     let curr = root;

//     while (curr || stack.length > 0) {
//         while (curr) {
//             stack.push(curr);
//             curr = curr.left;
//         }
//         curr = stack.pop();
//         k--;
//         if (k === 0) return curr.val;
//         curr = curr.right;
//     }
// };