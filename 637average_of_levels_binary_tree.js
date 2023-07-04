// https://leetcode.com/problems/average-of-levels-in-binary-tree/

var averageOfLevels = function(root) {
    let avgs = [];

    let stack = [root];

    while (stack.length > 0) {
        let newlevel = [];
        let tot = 0;
        let n = 0
        while (stack.length > 0) {
            const curr = stack.pop();
            n++;
            tot += curr.val;
            if (curr.left) newlevel.push(curr.left);
            if (curr.right) newlevel.push(curr.right);
        }
        avgs.push(tot/n);
        stack = newlevel;
    }

    return avgs;
};