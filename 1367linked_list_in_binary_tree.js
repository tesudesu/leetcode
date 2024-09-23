// https://leetcode.com/problems/linked-list-in-binary-tree/

var isSubPath = function(head, root) {
    let found = false;

    const check = (node, list) => {
        if (!list) {
            found = true;
            return;
        }
        if (!node) {
            return;
        }
        if (node.val === list.val) {
            check(node.left, list.next);
            check(node.right, list.next);
        }
    }

    const dfs = (node) => {
        if (!node || found) return;
        let dummy = head;
        check(node, dummy);
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);

    return found;
};


var isSubPath = function(head, root) {
    let found = false;

    const check = (node, list) => {
        if (!list) {
            return true;
        }
        if (!node) {
            return false;
        }
        if (node.val !== list.val) {
            return false;
        }
        let left = check(node.left, list.next);
        let right = check(node.right, list.next);
        return left || right;
    }

    const dfs = (node) => {
        if (!node || found) return;
        let dummy = head;
        if (check(node, dummy)) {
            found = true;
            return;
        }
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);

    return found;
};