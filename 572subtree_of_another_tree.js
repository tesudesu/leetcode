// https://leetcode.com/problems/subtree-of-another-tree/

var isSubtree = function(root, subRoot) {
    const findHead = (node) => {
        if (node === null) return;

        if (node.val === subRoot.val) {
            if (match(node, subRoot)) {
                return true;
            }
        }

        return findHead(node.left) || findHead(node.right);
    }

    const match = (nodeTree, nodeSubtree) => {
        if (!nodeTree && !nodeSubtree) return true;
        if ((!nodeTree && nodeSubtree) || (nodeTree && !nodeSubtree)) return false;
        if (nodeTree.val !== nodeSubtree.val) return false;

       return match(nodeTree.left, nodeSubtree.left) && match(nodeTree.right, nodeSubtree.right);
    }

    return findHead(root) ? true : false;
};