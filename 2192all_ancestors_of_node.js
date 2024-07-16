// https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/

var getAncestors = function(n, edges) {
    const ancestors = new Map();

    for (const [ancestor, child] of edges) {
        if (ancestors.has(child)) {
            let arr = ancestors.get(child);
            arr.push(ancestor);
            ancestors.set(child, arr);
        } else {
            ancestors.set(child, [ancestor]);
        }
    }

    let res = Array(n).fill();
    let anc = [];
    
    const dfs = (node, visited) => {
        if (!ancestors.has(node)) {
            return;
        }
        const ancestor = ancestors.get(node);
        for (let i = 0; i < ancestor.length; i++) {
            if (visited[ancestor[i]]) continue;
            anc.push(ancestor[i]);
            visited[ancestor[i]] = true;
            dfs(ancestor[i], visited);
        }
    }

    for (let i = 0; i < n; i++) {
        anc = [];
        const visited = Array(n).fill(false);
        dfs(i, visited);
        anc.sort((a, b) => a - b);
        res[i] = anc;
    }

    return res;
};