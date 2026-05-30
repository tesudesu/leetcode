// https://leetcode.com/problems/find-leaves-of-binary-tree/

var findLeaves = function(root) {
    const arr = new Map();

    const dfs = (node) => {
        if (!node) {
            return -1;
        }

        let height = 1 + Math.max(dfs(node.left), dfs(node.right));
        if (!arr.has(height)) {
            let level = [node.val];
            arr.set(height, level);
        } else {
            let level = arr.get(height);
            level.push(node.val);
        }

        return height;
    }

    dfs(root);

    let currLevel = 0;

    let ans = [];

    while (arr.has(currLevel)) {
        ans.push(arr.get(currLevel));
        currLevel++;
    }

    return ans;
};