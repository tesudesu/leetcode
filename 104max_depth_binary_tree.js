// https://leetcode.com/problems/maximum-depth-of-binary-tree/

var maxDepth = function(root) {
    if (root === null) return 0;

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

var maxDepth = function(root) {
    if (root === null) return 0;

    let level = 0;
    let arr = [root];

    while (arr.length > 0) {
        let newLevel = [];
        while (arr.length > 0) {
            const node = arr.pop();
            if (node.left) newLevel.push(node.left);
            if (node.right) newLevel.push(node.right);
        }
        arr = newLevel;
        level++;
    }
    
    return level;
};