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


var postorderTraversal = function(root) {
    let stack = [];
    let curr = root;
    let ans = [];

    while (curr || stack.length > 0) {
        while (curr) {
            ans.push(curr.val);
            stack.push(curr);
            curr = curr.right;
        }
        curr = stack.pop();
        curr = curr.left;
    }

    return ans.reverse();
};