// https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/

const isPalindromic = (map) => {
    let odd = false;

    for (const [val, count] of map) {
        if (count % 2 !== 0) {
            if (odd) {
                return false;
            } else {
                odd = true;
            }
        }
    }

    return true;
}

var pseudoPalindromicPaths  = function(root) {
    let tot = 0;
    let map = new Map();

    const dfs = (node) => {
        map.set(node.val, (map.get(node.val) || 0) + 1);

        if (!node.left && !node.right) {
            if (isPalindromic(map)) {
                tot++;
            }
            map.set(node.val, map.get(node.val) - 1);
            return;
        } 

        if (node.left) {
            dfs(node.left);
        }

        if (node.right) {
            dfs(node.right);
        }

        map.set(node.val, map.get(node.val) - 1);
    }

    dfs(root);
    
    return tot;
};