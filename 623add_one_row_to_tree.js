// https://leetcode.com/problems/add-one-row-to-tree/

var addOneRow = function(root, val, depth) {
    if (depth === 1) {
        const newRoot = new TreeNode(val, root, null);
        return newRoot;
    }

    let stack = [root];
    let level = 2;

    while (level < depth) {
        const length = stack.length;
        let newLevel = [];
        for (let i = 0; i < length; i++) {
            const curr = stack.pop();
            if (curr.left) {
                newLevel.push(curr.left);
            }
            if (curr.right) {
                newLevel.push(curr.right);
            }
        }
        stack = newLevel;
        level++;
    }

    for (let i = 0; i < stack.length; i++) {
        const curr = stack[i];
        const tempLeft = curr.left;
        const tempRight = curr.right;
        curr.left = new TreeNode(val, tempLeft, null);
        curr.right = new TreeNode(val, null, tempRight)
    }

    return root;
};