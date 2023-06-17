// https://leetcode.com/problems/path-sum-ii/

var pathSum = function(root, targetSum) {
    let ans = [];

    const dfs = (node, sum, arr) => {
        if (node === null) return;
        sum += node.val;
        arr.push(node.val);

        if (node.left === null && node.right === null) {
            if (sum === targetSum) {
                ans.push(arr.slice());
            }
            return;
        }

        if (node.left !== null) {
            dfs(node.left, sum, arr);
            arr.pop();
        }

        if (node.right !== null) {
            dfs(node.right, sum, arr);
            arr.pop();
        }
    }

    dfs(root, 0, []);

    return ans;
};