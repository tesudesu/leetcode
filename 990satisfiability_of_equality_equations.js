// https://leetcode.com/problems/satisfiability-of-equality-equations/

var equationsPossible = function(equations) {
    const roots = Array(26).fill();
    for (let i = 0; i < 26; i++) {
        roots[i] = i;
    }

    const find = (node) => {
        if (roots[node] !== node) {
            roots[node] = find(roots[node]);
        }
        return roots[node];
    }

    const union = (node1, node2) => {
        let root1 = find(node1);
        let root2 = find(node2);
        if (root1 !== root2) {
            roots[root1] = root2;
        }
    }

    for (let i = 0; i < equations.length; i++) {
        if (equations[i][1] === "!") continue;
        let a = equations[i].charCodeAt(0) - 97;
        let b = equations[i].charCodeAt(3) - 97;
        union(a, b);
    }

    for (let i = 0; i < equations.length; i++) {
        if (equations[i][1] === "=") continue;
        let a = equations[i].charCodeAt(0) - 97;
        let b = equations[i].charCodeAt(3) - 97;
        if (find(a) === find(b)) {
            return false;
        }
    }

    return true;
};