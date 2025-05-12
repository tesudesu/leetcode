// https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/

var lcaDeepestLeaves = function(root) {
    const search = (node) => {
        if (!node) {
            return [0, node];
        }

        let left = search(node.left);
        let right = search(node.right);

        if (left[0] > right[0]) {
            return [left[0] + 1, left[1]];
        } else if (left[0] < right[0]) {
            return [right[0] + 1, right[1]];
        } else {
            return [left[0] + 1, node];
        }
    }

    return search(root)[1];
};