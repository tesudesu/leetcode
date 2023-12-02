// https://leetcode.com/problems/closest-binary-search-tree-value/

var closestValue = function(root, target) {
    let closestDist = Infinity;
    let closest;

    const dfs = (node) => {
        if (!node) return;
        const currDist = Math.abs(node.val - target);
        if (currDist < closestDist) {
            closestDist = currDist;
            closest = node.val;
        } else if (currDist === closestDist) {
            if (node.val < closest) {
                closest = node.val;
            }
        }
        if (target > node.val) {
            dfs(node.right);
        } else {
            dfs(node.left);
        }
    }

    dfs(root);

    return closest;
};