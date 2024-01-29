// https://leetcode.com/problems/binary-tree-preorder-traversal/

var preorderTraversal = function(root) {
    let ans = [];

    const preorder = (node) => {
        if (!node) return;

        ans.push(node.val);
        preorder(node.left);
        preorder(node.right);
    }

    preorder(root);

    return ans;
};


var preorderTraversal = function(root) {
    let stack = [];
    let curr = root;
    let ans = [];

    while (curr || stack.length > 0) {
        while (curr) {
            ans.push(curr.val);
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        curr = curr.right;
    }

    return ans;
};