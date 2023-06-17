// https://leetcode.com/problems/search-in-a-binary-search-tree/

var searchBST = function(root, val) {
    const search = (node) => {
        if (node === null) return null;

        if (val > node.val) {
            return search(node.right);
        } else if (val < node.val) {
            return search(node.left);
        } else {
            return node;
        }
    }

    return search(root);
};