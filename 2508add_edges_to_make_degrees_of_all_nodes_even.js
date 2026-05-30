// https://leetcode.com/problems/add-edges-to-make-degrees-of-all-nodes-even/

var isPossible = function(n, edges) {
    const connections = Array(n + 1).fill().map(() => new Set());

    for (const [x, y] of edges) {
        connections[x].add(y);
        connections[y].add(x);
    }

    let needConnections = [];

    for (let i = 1; i < connections.length; i++) {
        if (connections[i].size % 2 === 1) {
            needConnections.push(i);
        }
    }

    if (needConnections.length === 0) {
        return true;
    }

    if (needConnections.length % 2 === 1 || needConnections.length > 4) {
        return false;
    }

    const canConnect = (a, b) => {
        if (!connections[a].has(b)) {
            return 1;
        }

        for (let i = 1; i <= n; i++) {
            if (i === a || i === b) continue;

            if (!connections[i].has(a) && !connections[i].has(b)) {
                return 2;
            }
        }

        return Infinity;
    }

    if (needConnections.length === 2) {
        return canConnect(needConnections[0], needConnections[1]) <= 2;
    }

    return canConnect(needConnections[0], needConnections[1]) + canConnect(needConnections[2], needConnections[3]) <= 2 ||
            canConnect(needConnections[0], needConnections[2]) + canConnect(needConnections[1], needConnections[3]) <= 2 ||
            canConnect(needConnections[0], needConnections[3]) + canConnect(needConnections[2], needConnections[1]) <= 2;
};