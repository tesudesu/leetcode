// https://leetcode.com/problems/leaf-similar-trees/

var leafSimilar = function(root1, root2) {
    let leaves1 = [];
    let leaves2 = [];

    const dfs = (node, leaves) => {
        if (node.left === null && node.right === null) leaves.push(node.val);
        if (node.left) dfs(node.left, leaves);
        if (node.right) dfs(node.right, leaves);
    }
    
    dfs(root1, leaves1);
    dfs(root2, leaves2);

    return leaves1.toString() === leaves2.toString();
};