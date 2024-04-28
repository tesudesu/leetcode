// https://leetcode.com/problems/sum-of-distances-in-tree/

var sumOfDistancesInTree = function(n, edges) {
    const map = new Map();
    for (const [a, b] of edges) {
        if (map.has(a)) {
            let arr = map.get(a);
            arr.push(b);
            map.set(a, arr);
        } else {
            map.set(a, [b]);
        }
        if (map.has(b)) {
            let arr = map.get(b);
            arr.push(a);
            map.set(b, arr);
        } else {
            map.set(b, [a]);
        }
    }

    const count = Array(n).fill(1);
    const res = Array(n).fill(0);

    const dfs = (node, parent) => {
        if (!map.has(node)) return;
        const nextNodes = map.get(node);
        for (const child of nextNodes) {
            if (child === parent) continue;
            dfs(child, node);
            count[node] += count[child];
            res[node] += res[child] + count[child];
        }
    }

    const dfs2 = (node, parent) => {
        if (!map.has(node)) return;
        const nextNodes = map.get(node);
        for (const child of nextNodes) {
            if (child === parent) continue;
            res[child] = res[node] - count[child] + n - count[child];
            dfs2(child, node);
        }
    }

    dfs(0, -1);
    dfs2(0, -1);

    return res;
};


// Using queue to get sum for node 0

const { Queue } = require('@datastructures-js/queue');

var sumOfDistancesInTree = function(n, edges) {
    const map = new Map();
    for (const [a, b] of edges) {
        if (map.has(a)) {
            let arr = map.get(a);
            arr.push(b);
            map.set(a, arr);
        } else {
            map.set(a, [b]);
        }
        if (map.has(b)) {
            let arr = map.get(b);
            arr.push(a);
            map.set(b, arr);
        } else {
            map.set(b, [a]);
        }
    }

    const count = Array(n).fill(1);
    const res = Array(n).fill(0);

    const queue = new Queue();
    queue.enqueue(0);
    const visited = Array(n).fill(false);
    visited[0] = true;
    let tot = 0;
    let steps = 1;

    while (!queue.isEmpty()) {
        const length = queue.size();
        for (let i = 0; i < length; i++) {
            const curr = queue.dequeue();
            if (!map.has(curr)) continue;
            const nextNodes = map.get(curr);
            for (const child of nextNodes) {
                if (visited[child]) continue;
                visited[child] = true;
                tot += steps;
                queue.enqueue(child);
            }
        }
        steps++;
    }

    res[0] = tot;

    const dfs = (node, parent) => {
        if (!map.has(node)) return;
        const nextNodes = map.get(node);
        for (const child of nextNodes) {
            if (child === parent) continue;
            dfs(child, node);
            count[node] += count[child];
        }
    }

    const dfs2 = (node, parent) => {
        if (!map.has(node)) return;
        const nextNodes = map.get(node);
        for (const child of nextNodes) {
            if (child === parent) continue;
            res[child] = res[node] - count[child] + n - count[child];
            dfs2(child, node);
        }
    }

    dfs(0, -1);
    dfs2(0, -1);

    return res;
};