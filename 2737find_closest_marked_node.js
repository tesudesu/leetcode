// https://leetcode.com/problems/find-the-closest-marked-node/

var minimumDistance = function(n, edges, s, marked) {
    const connections = new Map();

    for (const [a, b, weight] of edges) {
        if (connections.has(a)) {
            let arr = connections.get(a);
            arr.push([b, weight]);
            connections.set(a, arr);
        } else {
            connections.set(a, [[b, weight]]);
        }
    }

    let minDist = Array(n).fill(Infinity);
    const markedNodes = new Set(marked);

    const minQueue = new MinPriorityQueue(a => a[1]);
    minQueue.enqueue([s, 0]);

    while (!minQueue.isEmpty()) {
        const [node, dist] = minQueue.dequeue();
        if (markedNodes.has(node)) {
            return dist;
        }
        if (!connections.has(node)) {
            continue;
        }
        const neighbors = connections.get(node);
        for (const [nei, nextDist] of neighbors) {
            const newDist = dist + nextDist;
            if (newDist < minDist[nei]) {
                minQueue.enqueue([nei, newDist]);
                minDist[nei] = newDist;
            }
        }
    }

    return -1;
};