// https://leetcode.com/problems/path-sum/

var hasPathSum = function(root, targetSum) {
    const dfs = (node, sum) => {
        if (node === null) return false;
        sum += node.val;

        if (node.left === null && node.right === null) {
            if (sum === targetSum) {
                return true;
            } else {
                return false;
            }
        }

        return dfs(node.left, sum) || dfs(node.right, sum);
    }

    return dfs(root, 0);
};