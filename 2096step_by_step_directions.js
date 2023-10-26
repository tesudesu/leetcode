// https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/

var getDirections = function(root, startValue, destValue) {
    const findLCA = (node) => {
        if (!node) return null;

        if (node.val === startValue || node.val === destValue) {
            return node;
        }

        const left = findLCA(node.left);
        const right = findLCA(node.right);

        if (left && right) {
            return node;
        } else if (!left) {
            return right;
        } else {
            return left;
        }
    }

    const LCA = findLCA(root);

    const findStart = (node, path) => {
        if (!node) return;

        if (node.val === startValue) {
            return path;
        }

        return findStart(node.left, path + "U") || findStart(node.right, path + "U");
    }

    const findEnd = (node, path) => {
        if (!node) return;

        if (node.val === destValue) {
            return path;
        }

        return findEnd(node.left, path + "L") || findEnd(node.right, path + "R");
    }

    const fromStart = findStart(LCA, "");
    const toEnd = findEnd(LCA, "");

    return fromStart + toEnd;
};