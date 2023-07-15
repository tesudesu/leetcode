// https://leetcode.com/problems/minimum-depth-of-binary-tree/

var minDepth = function(root) {
    if (!root) return 0;

    let stack = [[root, 1]];

    while (stack.length > 0) {
        const currLength = stack.length;
        for (let i = 0; i < currLength; i++) {
            const [node, level] = stack.shift();
            if (node.left) {
                stack.push([node.left, level + 1]);
            }
            if (node.right) {
                stack.push([node.right, level + 1]);
            }
            if (!node.left && !node.right) return level;
        }
    }
};