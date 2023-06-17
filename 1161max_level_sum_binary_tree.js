// https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/

var maxLevelSum = function(root) {
    let max = -Infinity;
    let currLevel = 1;
    let maxLevel = 1;

    let stack = [root];

    while (stack.length > 0) {
        let currSum = 0;
        let newLevel = [];
        while (stack.length > 0) {
            const node = stack.pop();
            currSum += node.val;
            if (node.left) {
                newLevel.push(node.left);
            }
            if (node.right) {
                newLevel.push(node.right);
            }
        }
        if (currSum > max) {
            max = currSum;
            maxLevel = currLevel;
        }
        stack = newLevel;
        currLevel++;
    }

    return maxLevel;
};