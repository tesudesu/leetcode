// https://leetcode.com/problems/find-if-path-exists-in-graph/

var validPath = function(n, edges, source, destination) {
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

    const visited = Array(n).fill(false);
    visited[source] = true;

    const dfs = (node) => {
        if (node === destination) {
            return true;
        }

        if (!map.has(node)) {
            return false;
        }

        let ans = false;

        const nextNodes = map.get(node);
        for (let i = 0; i < nextNodes.length; i++) {
            if (!visited[nextNodes[i]]) {
                visited[nextNodes[i]] = true;
                ans |= dfs(nextNodes[i]);
            }
        }

        return ans;
    }

    return dfs(source);
};