// https://leetcode.com/problems/construct-string-from-binary-tree/

var tree2str = function(root) {
    let res = "";

    const preorder = (node) => {
        res += `(${node.val}`;  

        if (!node.left && !node.right) {
            return;
        } else if (!node.left && node.right) {
            res += "()";
            preorder(node.right);
            res += ")";
        } else if (node.left && !node.right) {
            preorder(node.left);
            res += ")";
        } else {
            preorder(node.left);
            res += ")";
            preorder(node.right);
            res += ")";
        }
    }

    preorder(root);

    return res.slice(1);
};