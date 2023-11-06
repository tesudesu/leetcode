// https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/

var averageOfSubtree = function(root) {
    let ans = 0;
    
    const calculate = (node) => {
        if (!node) {
            return [0, 0];
        }
        const [sumLeft, countLeft] = calculate(node.left);
        const [sumRight, countRight] = calculate(node.right);
        if (Math.floor((sumLeft + sumRight + node.val) / (countLeft + countRight + 1)) === node.val) {
            ans++;
        }
        return [sumLeft + sumRight + node.val, countLeft + countRight + 1];
    }

    calculate(root, 0);

    return ans;
};