// https://leetcode.com/problems/binary-tree-postorder-traversal/

var postorderTraversal = function(root) {
    if (!root) return [];

    let ans = [];

    const postorder = (node) => {
        if (node.left) {
            postorder(node.left);
        }
        if (node.right) {
            postorder(node.right);
        }
        ans.push(node.val);
    }

    postorder(root);

    return ans;
};