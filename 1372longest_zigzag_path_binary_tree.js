// https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/

var longestZigZag = function(root) {
    let longestPath = 0;

    const dfs = (node, left, right) => {
        if (node === null) {
            return;
        }

        longestPath = Math.max(left, right, longestPath);

        dfs(node.left, right + 1, 0);
        dfs(node.right, 0, left + 1);
    }

    dfs(root, 0, 0);
    return longestPath;
};