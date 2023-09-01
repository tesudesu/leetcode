// https://leetcode.com/problems/binary-search-tree-iterator/


var BSTIterator = function(root) {
    this.stack = [];

    while (root) {
        this.stack.push(root);
        root = root.left;
    }
};


BSTIterator.prototype.next = function() {
    let curr = this.stack.pop();
    const value = curr.val;

    curr = curr.right;

    while (curr) {
        this.stack.push(curr);
        curr = curr.left;
    }

    return value;
};


BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0;
};


// var BSTIterator = function(root) {
//     this.stack = [];
//     const inorder = (node) => {
//         if (node.right) {
//             inorder(node.right);
//         }
//         this.stack.push(node.val);
//         if (node.left) {
//             inorder(node.left);
//         }
//     }
//     inorder(root);
// };


// BSTIterator.prototype.next = function() {
//     return this.stack.pop();
// };


// BSTIterator.prototype.hasNext = function() {
//     return this.stack.length > 0;
// };