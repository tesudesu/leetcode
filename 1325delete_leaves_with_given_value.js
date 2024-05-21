// https://leetcode.com/problems/delete-leaves-with-a-given-value/

var removeLeafNodes = function(root, target) {
    const deleted = (node) => {
        if (!node) {
            return true;
        }

        const deletedLeft = deleted(node.left);
        const deletedRight = deleted(node.right);

        if (deletedLeft) {
            node.left = null;
        }

        if (deletedRight) {
            node.right = null;
        }

        if (deletedLeft && deletedRight && node.val === target) {
            return true;
        }

        return false;
    }

    if (deleted(root)) {
        return null;
    } else {
        return root;
    }
};