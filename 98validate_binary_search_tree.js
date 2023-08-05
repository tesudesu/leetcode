// https://leetcode.com/problems/validate-binary-search-tree/

var isValidBST = function(root) {
    let last = -Infinity;
    let res = true;

    const inorder = (node) => {
        if (node.left) {
            inorder(node.left);
        }
        if (node.val <= last) {
            res = false;
            return;
        } else {
            last = node.val;
        }
        if (node.right) {
            inorder(node.right);
        }
    }

    inorder(root);

    return res;
};

// var isValidBST = function(root) {
//     const check = (node, min, max) => {
//         if (!node) return true;

//         if (node.val < min || node.val > max) return false;

//         return check(node.left, min, node.val) && check(node.right, node.val, max);
//     }

//     return check(root, -Infinity, Infinity);
// };