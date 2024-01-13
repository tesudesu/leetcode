// https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/

var maxAncestorDiff = function(root) {
    let diff = 0;

    const dfs = (node, min, max) => {
        if (!node) {
            diff = Math.max(diff, max - min);
            return;
        }

        if (node.val < min) {
            min = node.val;
        }
        if (node.val > max) {
            max = node.val;
        }

        dfs(node.left, min, max);
        dfs(node.right, min, max);
    }

    dfs(root, root.val, root.val);

    return diff;
};