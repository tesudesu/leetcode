// https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/

var connect = function(root) {
    const dfs = (node) => {
        if (!node) return null;

        if (node.left && node.right) {
            node.left.next = node.right;
            let duplicate = node;
            while (duplicate.next) {
                if (duplicate.next.left) {
                    node.right.next = duplicate.next.left;
                    break;
                } else if (duplicate.next.right) {
                    node.right.next = duplicate.next.right;
                    break;
                }
                duplicate = duplicate.next;
            }
        } else if (node.left) {
            let duplicate = node;
            while (duplicate.next) {
                if (duplicate.next.left) {
                    node.left.next = duplicate.next.left;
                    break;
                } else if (duplicate.next.right) {
                    node.left.next = duplicate.next.right;
                    break;
                }
                duplicate = duplicate.next;
            }
        } else if (node.right) {
            let duplicate = node;
            while (duplicate.next) {
                if (duplicate.next.left) {
                    node.right.next = duplicate.next.left;
                    break;
                } else if (duplicate.next.right) {
                    node.right.next = duplicate.next.right;
                    break;
                }
                duplicate = duplicate.next;
            }
        }

        dfs(node.right);
        dfs(node.left);
    }

    dfs(root);

    return root;
};