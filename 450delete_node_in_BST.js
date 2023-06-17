// https://leetcode.com/problems/delete-node-in-a-bst/

var deleteNode = function(root, key) {
    const search = (node) => {
        if (node === null) return null;

        if (key > node.val) {
            node.right = search(node.right);
        } else if (key < node.val) {
            node.left = search(node.left);
        } else {
            if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            } else {
                let curr = node.right;
                while (curr.left) {
                    curr = curr.left;
                }
                curr.left = node.left;
                return node.right;
            }
        }
        return node;
    }

    return search(root);
};