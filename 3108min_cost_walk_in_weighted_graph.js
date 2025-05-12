// https://leetcode.com/problems/minimum-cost-walk-in-weighted-graph/

var minimumCost = function(n, edges, query) {
    const roots = Array(n).fill();
    const rank = Array(n).fill(0);
    const weights = Array(n).fill();
    for (let i = 0; i < n; i++) {
        roots[i] = i;
        weights[i] = new Set();
    }

    const find = (node) => {
        if (node === roots[node]) {
            return node;
        }
        roots[node] = find(roots[node]);
        return roots[node];
    }

    const union = (node1, node2) => {
        const root1 = find(node1);
        const root2 = find(node2);

        if (root1 === root2) {
            return;
        }

        if (rank[root1] > rank[root2]) {
            roots[root2] = root1; 
        } else if (rank[root1] < rank[root2]) {
            roots[root1] = root2;
        } else {
            roots[root2] = root1; 
            rank[root1]++;
        }
    }

    for (const [a, b, weight] of edges) {
        union(a, b);
    }

    for (const [a, b, weight] of edges) {
        const root = find(a);
        weights[root].add(weight);
    }

    const res = Array(query.length).fill(-1);

    for (let i = 0; i < query.length; i++) {
        const rootA = find(query[i][0]);
        const rootB = find(query[i][1]);

        if (rootA !== rootB) continue;

        let ans = -1;

        for (const weight of weights[rootA]) {
            if (ans === -1) {
                ans = weight;
            } else {
                ans &= weight;
            }
        }

        res[i] = ans;
    }

    return res;
};