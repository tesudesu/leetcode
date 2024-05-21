// https://leetcode.com/problems/distribute-coins-in-binary-tree/

var distributeCoins = function(root) {
    let tot = 0;
        
    const postorder = (node) => {
        if (!node) {
            return 0;
        }

        let left = postorder(node.left);
        let right = postorder(node.right);

        tot += Math.abs(left) + Math.abs(right);

        return left + right + node.val - 1;
    }

    postorder(root);

    return tot;
};