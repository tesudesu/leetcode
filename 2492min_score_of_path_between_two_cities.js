// https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/

var minScore = function(n, roads) {
    const connections = Array(n + 1).fill().map(() => Array());

    for (const [a, b, price] of roads) {
        connections[a].push(b);
        connections[b].push(a);
    }

    const canReach = Array(n + 1).fill(false);

    const queue = new Queue();
    queue.enqueue(1);

    while (queue.size() > 0) {
        const node = queue.dequeue();
        canReach[node] = true;
        const neighbors = connections[node];
        for (const nei of neighbors) {
            if (canReach[nei]) continue;
            queue.push(nei);
        }
    }

    let min = Infinity;

    for (const [a, b, price] of roads) {
        if (canReach[a] || canReach[b]) {
            min = Math.min(min, price);
        }
    }

    return min;
};