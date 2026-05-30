// https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/

var minimumWeight = function(n, edges, src1, src2, dest) {
    const connections = Array(n).fill().map(() => Array());

    for (const [a, b, weight] of edges) {
        connections[a].push([b, weight]);
    }

    const connectionsReverse = Array(n).fill().map(() => Array());

    for (const [a, b, weight] of edges) {
        connectionsReverse[b].push([a, weight]);
    }

    const shortestFrom1 = Array(n).fill(Infinity);
    shortestFrom1[src1] = 0;

    const shortestFrom2 = Array(n).fill(Infinity);
    shortestFrom2[src2] = 0;

    const shortestFromDest = Array(n).fill(Infinity);
    shortestFromDest[dest] = 0;

    const shortestPath = (source, arr, map) => {
        const minQueue = new MinPriorityQueue(a => a[0]);
        minQueue.enqueue([0, source]);
        while (minQueue.size() > 0) {
            const [weight, curr] = minQueue.dequeue();
            if (weight > arr[curr]) continue;
            const neighbors = map[curr];
            for (const [nei, addWeight] of neighbors) {
                const newWeight = weight + addWeight;
                if (newWeight < arr[nei]) {
                    arr[nei] = newWeight;
                    minQueue.enqueue([newWeight, nei]);
                }
            }
        }
    }

    shortestPath(src1, shortestFrom1, connections);
    shortestPath(src2, shortestFrom2, connections);
    shortestPath(dest, shortestFromDest, connectionsReverse);

    let ans = Infinity;

    for (let i = 0; i < n; i++) {
        ans = Math.min(ans, shortestFrom1[i] + shortestFromDest[i] + shortestFrom2[i]);
    }

    return ans === Infinity ? -1 : ans;
};