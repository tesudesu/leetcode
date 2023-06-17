// https://leetcode.com/problems/minimum-absolute-difference-in-bst/

var getMinimumDifference = function(root) {
    let diff = Infinity;
    let prevNodeVal = null;

    const inorderTraversal = (node) => {
        if (node === null) return;

        inorderTraversal(node.left);
        if(prevNodeVal !== null) {
            diff = Math.min(diff, node.val - prevNodeVal);
        }
        prevNodeVal = node.val;
        inorderTraversal(node.right);
    }

    inorderTraversal(root);

    console.log(prevNodeVal)

    return diff;
};

// var getMinimumDifference = function(root) {
//     let stack = [root];
//     let vals = [root.val];

//     while (stack.length > 0) {
//         let curr = stack.pop();
//         if (curr.left) {
//             vals.push(curr.left.val);
//             stack.push(curr.left);
//         }
//         if (curr.right) {
//             vals.push(curr.right.val); 
//             stack.push(curr.right);
//         }
//     }

//     vals.sort((a, b) => (a - b));

//     let diff = Infinity;

//     for (let i = 1; i < vals.length; i++) {
//         if (vals[i] - vals[i-1] < diff) {
//             diff = vals[i] - vals[i-1];
//         }
//     }

//     return diff;
// };