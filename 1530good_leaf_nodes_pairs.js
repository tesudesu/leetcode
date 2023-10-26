// https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/

var countPairs = function(root, distance) {
    let pairs = 0;

    const dfs = (node) => {
        if (!node) return;

        if (!node.left && !node.right) {
            return [1];
        }

        let left = [];
        let right = [];

        if (node.left) {
            left = dfs(node.left);
        }
        if (node.right) {
            right = dfs(node.right);
        }

        for (let i = 0; i < right.length; i++) {
            for (let j = 0; j < left.length; j++) {
                if (right[i] + left[j] <= distance) {
                    pairs++;
                }
            }
        }

        let merge = [...left, ...right];
        for (let i = 0; i < merge.length; i++) {
            merge[i] += 1;
        }

        return merge;
    }

    dfs(root);

    return pairs;
};