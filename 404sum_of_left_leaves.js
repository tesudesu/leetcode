// https://leetcode.com/problems/sum-of-left-leaves/

var sumOfLeftLeaves = function(root) {
    let tot = 0;

    const dfs = (node) => {
        if (!node) return;

        if (node.left && !node.left.left && !node.left.right) {
            tot += node.left.val;
        }

        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);

    return tot;
};