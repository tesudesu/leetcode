// https://leetcode.com/problems/find-duplicate-subtrees/

var findDuplicateSubtrees = function(root) {
    let subtrees = new Map();
    let duplicates = [];

    const getPaths = (node) => {
        if (!node) return "";

        let subtree = "(" + getPaths(node.left) + ")" + `${node.val}` + "(" + getPaths(node.right) + ")";

        subtrees.set(subtree, (subtrees.get(subtree) + 1) || 1);

        if (subtrees.get(subtree) === 2) {
            duplicates.push(node);
        }

        return subtree;
    }

    getPaths(root);

    return duplicates;
};