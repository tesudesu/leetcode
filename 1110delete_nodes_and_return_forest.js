// https://leetcode.com/problems/delete-nodes-and-return-forest/

var delNodes = function(root, to_delete) {
    const toDelete = new Set(to_delete);
    const roots = new Set([root]);

    const dfs = (node) => {
        if (!node) {
            return null;
        }

        let res = node;

        if (toDelete.has(node.val)) {
            res = null;
            roots.delete(node);
            if (node.left) {
                roots.add(node.left);
            }
            if (node.right) {
                roots.add(node.right);
            }
        }

        node.left = dfs(node.left);
        node.right = dfs(node.right);

        return res;
    }

    dfs(root);

    return [...roots];
};


var delNodes = function(root, to_delete) {
    const heads = new Set();
    heads.add(root);

    for (const num of to_delete) {
        for (const head of heads) {
            if (head.val === num) {
                if (head.left) {
                    heads.add(head.left);
                }
                if (head.right) {
                    heads.add(head.right);
                }
                heads.delete(head);
                break;
            } else {
                let parent;
                let toDelete;
                
                const dfs = (node) => {
                    if (!node) return;
                    if (node.left && node.left.val === num) {
                        parent = node;
                        toDelete = node.left;
                        return;
                    }
                    if (node.right && node.right.val === num) {
                        parent = node;
                        toDelete = node.right;
                        return;
                    }
                    dfs(node.left);
                    dfs(node.right);
                }

                dfs(head);

                if (!parent) {
                    continue;
                }

                if (toDelete.left) {
                    heads.add(toDelete.left);
                }
                if (toDelete.right) {
                    heads.add(toDelete.right);
                }
                if (parent.left && parent.left.val === toDelete.val) {
                    parent.left = null;
                } else {
                    parent.right = null;
                }
                break;
            }
        }
    }

    let ans = [];

    for (const head of heads) {
        ans.push(head);
    }

    return ans;
};