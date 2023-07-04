// https://leetcode.com/problems/path-sum-iii/

var pathSum = function(root, targetSum) {
    let tot = 0;

    const dfs = (node, currSum, map) => {
        if (node === null) return;

        map = {...map};

        currSum += node.val;

        if (currSum === targetSum) tot++;

        if (map[currSum - targetSum]) {
            tot += map[currSum - targetSum];
        }

        if (map[currSum]) {
            map[currSum]++;
        } else {
            map[currSum] = 1;
        }

        dfs(node.left, currSum, map);
        dfs(node.right, currSum, map);
    }

    dfs(root, 0, {});
    return tot;
};


// var pathSum = function(root, targetSum) {
//     let map = {};
//     let tot = 0;

//     const dfs = (node, currSum) => {
//         if (node === null) return;

//         currSum += node.val;

//         if (currSum === targetSum) tot++;

//         if (map[currSum - targetSum]) {
//             tot += map[currSum - targetSum];
//         }

//         if (map[currSum]) {
//             map[currSum]++;
//         } else {
//             map[currSum] = 1;
//         }

//         dfs(node.left, currSum);
//         dfs(node.right, currSum);

//         map[currSum]--;
//     }

//     dfs(root, 0);
//     return tot;
// };


// var pathSum = function(root, targetSum) {
//     if (root === null) return 0;

//     const dfs = (node, currSum) => {
//         if (node === null) return 0;

//         let ans = 0;

//         if (currSum + node.val === targetSum) ans++;

//         return ans + dfs(node.left, currSum + node.val) + dfs(node.right, currSum + node.val);
//     }
    
//     return dfs(root, 0) + pathSum(root.right, targetSum) + pathSum(root.left, targetSum);
// };


// var pathSum = function(root, targetSum) {
//     if (root === null) return 0;

//     const dfs = (node, toSum) => {
//         if (node === null) return 0;

//         let ans = 0;

//         if (node.val === toSum) ans++;

//         return ans + dfs(node.left, toSum - node.val) + dfs(node.right, toSum - node.val);
//     }
    
//     return dfs(root, targetSum) + pathSum(root.right, targetSum) + pathSum(root.left, targetSum);
// };