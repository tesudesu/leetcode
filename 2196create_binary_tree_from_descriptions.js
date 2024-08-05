// https://leetcode.com/problems/create-binary-tree-from-descriptions/

var createBinaryTree = function(descriptions) {
    let map = new Map();
    let notHead = new Set();

    for (const [nodeValue, childValue, isLeft] of descriptions) {
        if (!map.has(nodeValue)) {
            map.set(nodeValue, new TreeNode(nodeValue));
        }
        let node = map.get(nodeValue);

        if (!map.has(childValue)) {
            map.set(childValue, new TreeNode(childValue));
        }
        let child = map.get(childValue);

        if (isLeft) {
            node.left = child;
        } else {
            node.right = child;
        }

        notHead.add(childValue);
    }

    for (const [nodeValue, node] of map) {
        if (!notHead.has(nodeValue)) {
            return node;
        }
    }
};