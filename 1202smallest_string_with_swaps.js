// https://leetcode.com/problems/smallest-string-with-swaps/

var smallestStringWithSwaps = function(s, pairs) {
    const connect = new Map();
    for (let i = 0; i < pairs.length; i++) {
        const [a, b] = pairs[i];
        if (connect.has(a)) {
            let arr = connect.get(a);
            arr.push(b);
            connect.set(a, arr);
        } else {
            connect.set(a, [b]);
        }
        if (connect.has(b)) {
            let arr = connect.get(b);
            arr.push(a);
            connect.set(b, arr);
        } else {
            connect.set(b, [a]);
        }
    }

    const visited = new Set();

    const findGroup = (node, arr) => {
        arr.push(node);
        visited.add(node);

        if (connect.has(node)) {
            let connected = connect.get(node);
            for (let i = 0; i < connected.length; i++) {
                if (visited.has(connected[i])) continue;
                visited.add(connected[i])
                findGroup(connected[i], arr);
            }
        }

        return arr;
    }

    let ans = Array(s.length).fill();

    for (let i = 0; i < s.length; i++) {
        if (visited.has(i)) continue;
        let group = findGroup(i, []);
        let letters = Array(group.length).fill();
        for (let i = 0; i < group.length; i++) {
            letters[i] = s[group[i]];
        }
        group.sort((a, b) => a - b);
        letters.sort((a, b) => {
            if (a < b) {
                return -1;
            } else {
                return 1;
            }
        });
        for (let i = 0; i < group.length; i++) {
            ans[group[i]] = letters[i];
        }
    }

    return ans.join("");
};


// Union find

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

var smallestStringWithSwaps = function(s, pairs) {
    const n = s.length;
    const uf = new UnionFind(n);
    for (const [a, b] of pairs) {
        uf.union(a, b);
    }
    const map = new Map();
    for (let i = 0; i < n; i++) {
        const root = uf.find(i);
        if (!map.has(root)) {
            map.set(root, [s[i]]);
        } else {
            let arr = map.get(root);
            arr.push(s[i]);
        }
    }
    for (const [root, letters] of map) {
        letters.sort((a, b) => a > b ? -1 : 1);
    }
    let ans = [];
    for (let i = 0; i < n; i++) {
        const root = uf.find(i);
        ans.push(map.get(root).pop());
    }

    return ans.join("");
};