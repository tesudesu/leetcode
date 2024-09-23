// https://leetcode.com/problems/lexicographically-smallest-equivalent-string/

class UnionFind {
    constructor(n) {
        this.roots = Array(n).fill();
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
        if (root1 === root2) {
            return;
        }
        if (root1 > root2) {
            this.roots[root1] = root2;
        } else {
            this.roots[root2] = root1;
        }
    }
}

var smallestEquivalentString = function(s1, s2, baseStr) {
    const uf = new UnionFind(26);

    for (let i = 0; i < s1.length; i++) {
        uf.union(s1.charCodeAt(i) - 97, s2.charCodeAt(i) - 97);
    }

    let ans = [];

    for (let i = 0; i < baseStr.length; i++) {
        const charcode = baseStr.charCodeAt(i) - 97;
        ans.push(String.fromCharCode(uf.find(charcode) + 97));
    }

    return ans.join("");
};