// https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/

var verifyPreorder = function(preorder) {
    let stack = [];
    let min = -1;

    for (let i = 0; i < preorder.length; i++) {
        while (stack.length > 0 && stack[stack.length - 1] < preorder[i]) {
            let last = stack.pop();
            min = Math.max(min, last);
        }
        if (preorder[i] < min) {
            return false;
        }
        stack.push(preorder[i]);
    }

    return true;
};