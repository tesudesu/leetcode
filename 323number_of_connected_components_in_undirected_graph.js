// https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/

class UnionFind {
    constructor(n) {
        this.roots = Array(n).fill();
        this.rank = Array(n).fill(0);
        for (let i = 0; i < n; i++) {
            this.roots[i] = i;
        }
    }

    find(x) {
        if (this.roots[x] === x) {
            return x;
        }
        this.roots[x] = this.find(this.roots[x]);
        return this.roots[x];
    }

    union(x, y) {
        const root1 = this.find(x);
        const root2 = this.find(y);
        if (root1 === root2) return;
        if (this.rank[root1] > this.rank[root2]) {
            this.roots[root2] = root1;
        } else if (this.rank[root1] < this.rank[root2]) {
            this.roots[root1] = root2;
        } else {
            this.roots[root2] = root1;
            this.rank[root1]++;
        }
    }
}

var countComponents = function(n, edges) {
    const unionfind = new UnionFind(n);

    for (const [a, b] of edges) {
        unionfind.union(a, b);
    }

    let roots = new Set();

    for (let i = 0; i < n; i++) {
        let root = unionfind.find(i);
        roots.add(root);
    }

    return roots.size;
};