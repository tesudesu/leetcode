// https://leetcode.com/problems/sum-root-to-leaf-numbers/

var sumNumbers = function(root) {
    let tot = 0;

    const dfs = (node, sum) => {
        sum = (sum * 10) + node.val;
        if (!node.left && !node.right) {
            tot += sum;
            return;
        }
        if (node.left) {
            dfs(node.left, sum);
        }
        if (node.right) {
            dfs(node.right, sum);
        }
    }

    dfs(root, 0);

    return tot;
};


// var sumNumbers = function(root) {
//     let nums = [];
//     let tot = 0;

//     const dfs = (node, arr) => {
//         arr.push(node.val);

//         if (node.left) {
//             dfs(node.left, arr.slice());
//         }
//         if (node.right) {
//             dfs(node.right, arr.slice());
//         }

//         if (!node.left && !node.right) {
//             let str = "";
//             for (let i = 0; i < arr.length; i++) {
//                 str += arr[i];
//             }
//             nums.push(Number(str));
//             return;
//         }
//     }

//     dfs(root, []);

//     for (let i = 0; i < nums.length; i++) {
//         tot += nums[i];
//     }

//     return tot;
// };