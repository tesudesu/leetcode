// https://leetcode.com/problems/find-center-of-star-graph/

var findCenter = function(edges) {
    const connections = new Map();

    for (const [a, b] of edges) {
        connections.set(a, (connections.get(a) + 1) || 1);
        connections.set(b, (connections.get(b) + 1) || 1);
    }

    let max = 0;
    let center;

    for (const [node, connection] of connections) {
        if (connection > max) {
            max = connection;
            center = node;
        } 
    }

    return center;
};


var findCenter = function(edges) {
    const first = edges[0][0];
    const second = edges[0][1];

    if (first === edges[1][0] || first === edges[1][1]) {
        return first;
    }

    return second;
};