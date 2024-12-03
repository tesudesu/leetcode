// https://leetcode.com/problems/shortest-distance-after-road-addition-queries-i/

var shortestDistanceAfterQueries = function(n, queries) {
    const dist = Array(queries.length).fill();

    const map = new Map();

    for (let i = 0; i < n; i++) {
        map.set(i, [i + 1]);
    }

    const bfs = () => {
        const queue = new Queue();
        const visited = Array(n).fill(false);
        queue.enqueue(0);
        visited[0] = true;
        let steps = 0;

        while (queue.size() > 0) {
            const length = queue.size();
            for (let j = 0; j < length; j++) {
                const node = queue.dequeue();
                for (const nei of map.get(node)) {
                    if (nei === n - 1) {
                        return steps + 1;
                    }
                    if (visited[nei]) continue;
                    queue.enqueue(nei);
                    visited[nei] = true;
                }
            }
            steps++;
        }
    }

    for (let i = 0; i < queries.length; i++) {
        const [a, b] = queries[i];

        let arr = map.get(a);
        arr.push(b);
        map.set(a, arr);

        dist[i] = bfs();
    }

    return dist;
};