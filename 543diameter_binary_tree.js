// https://leetcode.com/problems/diameter-of-binary-tree/

var diameterOfBinaryTree = function(root) {
    let diameter = 0;

    const length = (node) => {
        if (!node) return 0;

        return Math.max(length(node.left), length(node.right)) + 1;
    }

    let stack = [];

    stack.push(root);

    while (stack.length > 0) {
        const curr = stack.shift();

        diameter = Math.max(diameter, length(curr.right) + length(curr.left));

        if (curr.left) {
            stack.push(curr.left);
        }
        if (curr.right) {
            stack.push(curr.right);
        }
    }

    return diameter;
};


// var diameterOfBinaryTree = function(root) {
//     let diameter = 0;

//     const dfs = (node) => {
//         if (!node) return 0;

//         let left = dfs(node.left);
//         let right = dfs(node.right);

//         diameter = Math.max(diameter, left + right);

//         return Math.max(left, right) + 1;
//     }

//     dfs(root);

//     return diameter;
// };