// https://leetcode.com/problems/maximum-score-after-applying-operations-on-a-tree/

var maximumScoreAfterOperations = function (edges, values) {
    const connections = new Map();

    for (let i = 0; i < edges.length; i++) {
        const [a, b] = edges[i];
        if (connections.has(a)) {
            let arr = connections.get(a);
            arr.push(b);
            connections.set(a, arr);
        } else {
            connections.set(a, [b]);
        }
        if (connections.has(b)) {
            let arr = connections.get(b);
            arr.push(a);
            connections.set(b, arr);
        } else {
            connections.set(b, [a]);
        }
    }

    const dfs = (node, prev) => {
        let nextConnections = connections.get(node);
        if (node !== 0 && nextConnections.length === 1) {
            return values[node];
        }

        let loss = values[node];
        let loss2 = 0;

        for (let i = 0; i < nextConnections.length; i++) {
            if (nextConnections[i] !== prev) {
                loss2 += dfs(nextConnections[i], node);
            }
        }

        return Math.min(loss, loss2);
    }

    let tot = 0;
    for (let i = 0; i < values.length; i++) {
        tot += values[i];
    }

    return tot - dfs(0, 0);
};