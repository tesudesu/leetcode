// https://leetcode.com/problems/smallest-string-starting-from-leaf/

var smallestFromLeaf = function(root) {
    let smallest = "";

    const dfs = (node, arr) => {
        arr.push(String.fromCharCode(node.val + 97));

        if (!node.left && !node.right) {
            let string = arr.slice().reverse().join("");
            if (smallest.length === 0 || string < smallest) {
                smallest = string;
            }
            return;
        }

        if (node.left) {
            dfs(node.left, arr);
            arr.pop();
        }

        if (node.right) {
            dfs(node.right, arr);
            arr.pop();
        }
    }

    dfs(root, []);

    return smallest;
};