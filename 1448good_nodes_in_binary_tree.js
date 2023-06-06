// https://leetcode.com/problems/count-good-nodes-in-binary-tree/

var goodNodes = function(root) {
    
    const dfs = (node, max) => {
        let tot = 0;

        if (node === null) return 0;

        if (node.val >= max) {
            tot++;
        }

        max = Math.max(max, node.val);

        tot += dfs(node.left, max);
        tot += dfs(node.right, max);

        return tot;
    }

    return dfs(root, root.val);
};

// var goodNodes = function(root) {
//     let tot = 0;
//     let stack = [root];
//     let pathMax = [root.val];

//     while (stack.length > 0) {
//         let curr = stack.pop();
//         let max = pathMax.pop()
//         if (curr.val >= max) {
//             tot++;
//             max = curr.val;
//         }
//         if (curr.right) {
//             stack.push(curr.right);
//             pathMax.push(max);
//         }
//         if (curr.left) {
//             stack.push(curr.left);
//             pathMax.push(max);
//         }
//     }

//     return tot;
// };