// https://leetcode.com/problems/n-ary-tree-postorder-traversal/

var postorder = function(root) {
    let ans = [];

    const postorder = (node) => {
        if (!node) {
            return;
        }
        for (const child of node.children) {
            postorder(child);
        }
        ans.push(node.val);
    }

    postorder(root);

    return ans;
};