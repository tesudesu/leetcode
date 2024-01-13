// https://leetcode.com/problems/range-sum-of-bst/

var rangeSumBST = function(root, low, high) {
    let tot = 0;

    const dfs = (node) => {
        if (!node) return;

        if (node.val >= low && node.val <= high) {
            tot += node.val;
        }

        if (node.val >= low) {
            dfs(node.left);
        }

        if (node.val <= high) {
            dfs(node.right);
        }
    }

    dfs(root);

    return tot;
};