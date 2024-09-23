// https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/

class UnionFind {
    constructor(n) {
        this.roots = Array(n).fill();
        this.rank = Array(n).fill();
        for (let i = 0; i < n; i++) {
            this.roots[i] = i;
            this.rank[i] = 0;
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
        if (root1 === root2) {
            return;
        }
        if (this.rank[root1] > this.rank[root2]) {
            this.roots[root2] = root1;
        } else if (this.rank[root1] < this.rank[root2]) {
            this.roots[root1] = root2;
        } else {
            this.roots[root1] = root2;
            this.rank[root2]++;
        }
    }
}

var minimumHammingDistance = function(source, target, allowedSwaps) {
    const uf = new UnionFind(source.length);

    for (const [a, b] of allowedSwaps) {
        uf.union(a, b);
    }

    const map = new Map();

    for (let i = 0; i < source.length; i++) {
        const root = uf.find(i);
        if (!map.has(root)) {
            map.set(root, new Map());
        }
        const freq = map.get(root);
        freq.set(source[i], freq.get(source[i]) + 1 || 1);
    }

    let diff = 0;

    for (let i = 0; i < source.length; i++) {
        const root = uf.find(i);
        const freq = map.get(root);
        if (!freq.has(target[i])) {
            diff++;
            continue;
        }
        freq.set(target[i], freq.get(target[i]) - 1);
        if (freq.get(target[i]) === 0) {
            freq.delete(target[i]);
        }
    }

    return diff;
};