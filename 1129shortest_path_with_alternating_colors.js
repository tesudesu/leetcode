// https://leetcode.com/problems/shortest-path-with-alternating-colors/

var shortestAlternatingPaths = function (n, redEdges, blueEdges) {
    const queue = new Queue();
    queue.enqueue([0, -1]);

    const connections = Array(n).fill().map(() => Array().fill());

    for (const [from, to] of redEdges) {
        connections[from].push([to, 0]);
    }

    for (const [from, to] of blueEdges) {
        connections[from].push([to, 1]);
    }

    const ans = Array(n).fill(-1);
    ans[0] = 0;
    let steps = 1;

    const visited = Array(n).fill().map(() => Array(2).fill(false));

    while (queue.size() > 0) {
        const length = queue.size();
        for (let i = 0; i < length; i++) {
            const [curr, color] = queue.dequeue();
            const neighbors = connections[curr];
            for (const [nei, nextColor] of neighbors) {
                if (color !== nextColor) {
                    if (ans[nei] === -1) {
                        ans[nei] = steps;
                        queue.enqueue([nei, nextColor]);
                        visited[nei][nextColor] = true;
                    } else if (!visited[nei][nextColor]) {
                        queue.enqueue([nei, nextColor]);
                        visited[nei][nextColor] = true;
                    }
                }
            }
        }
        steps++;
    }

    return ans;
};