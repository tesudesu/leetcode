// https://leetcode.com/problems/binary-tree-inorder-traversal/

var inorderTraversal = function(root) {
    if (!root) return [];

    let values = [];

    const inorder = (node) => {
        if (node.left) {
            inorder(node.left);
        }
        values.push(node.val);
        if (node.right) {
            inorder(node.right);
        }
    }

    inorder(root);

    return values;
};


// var inorderTraversal = function(root) {
//     if (!root) return [];

//     let values = [];

//     let stack = [];

//     let curr = root;

//     while (curr || stack.length > 0) {
//         while (curr) {
//             stack.push(curr);
//             curr = curr.left;
//         }
//         curr = stack.pop();
//         values.push(curr.val);
//         curr = curr.right;
//     }

//     return values;
// };