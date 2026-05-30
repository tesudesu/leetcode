// https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/

var buildTree = function(inorder, postorder) {
    const map = new Map();

    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }

    const build = (inStart, inEnd, postStart, postEnd) => {
        if (inStart > inEnd || postStart > postEnd) return null;

        const root = new TreeNode(postorder[postEnd]);

        const index = map.get(postorder[postEnd]);

        const leftSize = index - inStart;

        const leftTree = build(inStart, inStart + leftSize - 1, postStart, postStart + leftSize - 1);

        const rightTree = build(index + 1, inEnd, postStart + leftSize, postEnd - 1);

        root.left = leftTree;
        root.right = rightTree;

        return root;
    }

    return build(0, inorder.length - 1, 0, postorder.length - 1);
};