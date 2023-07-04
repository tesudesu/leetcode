// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

var lowestCommonAncestor = function(root, p, q) {
    const find = (node) => {
        if (node.val === p.val || node.val === q.val) {
            return node;
        }
        if ((node.val > p.val && node.val < q.val) || (node.val < p.val && node.val > q.val)) {
            return node;
        }
        if (node.val > p.val && node.val > q.val) {
            return find(node.left);
        } else {
            return find(node.right);
        }
    }
    
    return find(root);
};