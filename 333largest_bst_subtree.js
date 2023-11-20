// https://leetcode.com/problems/largest-bst-subtree/

// Postorder traversal

var largestBSTSubtree = function(root) {
    let mostNodes = 0;

    const countBST = (node) => {
        if (!node) return [Infinity, -Infinity, 0];
        
        let [leftMin, leftMax, leftSize] = countBST(node.left);
        let [rightMin, rightMax, rightSize] = countBST(node.right);

        if (node.val > leftMax && node.val < rightMin) {
            mostNodes = Math.max(mostNodes, leftSize + rightSize + 1);
            return [Math.min(node.val, leftMin), Math.max(node.val, rightMax), leftSize + rightSize + 1];
        } else {
            return [-Infinity, Infinity, 0];
        }
    }

    countBST(root);

    return mostNodes;
};


// Preorder traversal

var largestBSTSubtree = function(root) {
    const countBST = (node, min, max) => {
        if (!node) return 0;
        if (node.val <= min || node.val >= max) return -Infinity;
        return countBST(node.left, min, node.val) + countBST(node.right, node.val, max) + 1;
    }

    let max = 0;

    const validateHead = (node) => {
        if (!node) return;
        max = Math.max(max, countBST(node, -Infinity, Infinity));
        validateHead(node.left);
        validateHead(node.right);
    }

    validateHead(root);

    return max;
};