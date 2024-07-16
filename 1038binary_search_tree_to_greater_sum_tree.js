// https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/

var bstToGst = function(root) {
    let sum = 0;

    const reverseInorder = (node) => {
        if (node.right) {
            reverseInorder(node.right);
        }
        sum += node.val;
        node.val = sum;
        if (node.left) {
            reverseInorder(node.left);
        }
    }

    reverseInorder(root);

    return root;
};