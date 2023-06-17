// https://leetcode.com/problems/binary-tree-right-side-view/

var rightSideView = function(root) {
    if (root === null) return [];

    let queue = [root];
    let ans = [root.val];

    while (queue.length > 0) {
        let newLevel = [];
        let furthestRight = null;
        while (queue.length > 0) {
            const node = queue.shift();
            if (node.left) {
                newLevel.push(node.left);
                furthestRight = node.left.val;
            }
            if (node.right) {
                newLevel.push(node.right);
                furthestRight = node.right.val;
            }
        }
        if (furthestRight !== null) ans.push(furthestRight);
        queue = newLevel;
    }
    return ans;
};