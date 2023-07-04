// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

var lowestCommonAncestor = function(root, p, q) {
    const dfs = (node) => {
        if (node === null) return;

        if (node.val === p.val || node.val === q.val) {
            return node;
        }

        const left = dfs(node.left);
        const right = dfs(node.right);

        if (left && right) return node;
        if (left && !right) return left;
        if (!left && right) return right;
    }

    return dfs(root);
};