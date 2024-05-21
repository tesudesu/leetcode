// https://leetcode.com/problems/evaluate-boolean-binary-tree/

// Recursive

var evaluateTree = function(root) {
    const postorder = (node) => {
        if (!node.left && !node.right) {
            return node.val;
        }

        if (node.val === 2) {
            return postorder(node.left) || postorder(node.right);
        } else {
            return postorder(node.left) && postorder(node.right);
        }
    }

    return postorder(root);
};


// Iterative

var evaluateTree = function(root) {
    const map = new Map();
    let stack = [root];

    while (stack.length > 0) {
        const curr = stack.pop();
        if (map.has(curr.left)) { // children have already been evaluated
            const left = map.get(curr.left);
            const right = map.get(curr.right);
            map.set(curr, curr.val === 2 ? left || right : left && right);
        } else if (!curr.left) { // is a leaf node
            map.set(curr, curr.val);
        } else { // first time visiting the node, children have not been evaluated
            stack.push(curr);
            stack.push(curr.left);
            stack.push(curr.right);
        }
    }

    return map.get(root);
};