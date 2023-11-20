// https://leetcode.com/problems/is-graph-bipartite/

// BFS

const { Queue } = require('@datastructures-js/queue');

var isBipartite = function (graph) {
    const n = graph.length;
    let colors = Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        if (colors[i] === 0) {
            const queue = new Queue();
            queue.enqueue([i, 1]);
            while (!queue.isEmpty()) {
                const [node, color] = queue.dequeue();
                colors[node] = color;
                for (let j = 0; j < graph[node].length; j++) {
                    if (colors[graph[node][j]] === color) {
                        return false;
                    } else if (colors[graph[node][j]] === 0) {
                        queue.enqueue([graph[node][j], color * -1]);
                    }
                }
            }
        }
    }

    return true;
};


// DFS, using additional visited set

var isBipartite = function(graph) {
    const n = graph.length;
    let colors = Array(n).fill(0);

    const dfs = (node, color, visited) => {
        if (colors[node] === 0) {
            colors[node] = color;
        } else if (colors[node] !== color) {
            return false;
        }
        if (visited.has(node)) return true;
        visited.add(node);

        const connections = graph[node];
        for (let i = 0; i < connections.length; i++) {
            if (!dfs(connections[i], color * -1, visited)) {
                return false;
            }
        }

        return true;
    }

    for (let i = 0; i < n; i++) {
        if (colors[i] === 0) {
            const visited = new Set();
            if (!dfs(i, 1, visited)) {
                return false;
            };
        }
    }

    return true;
};


// DFS, no additional visited set

var isBipartite = function(graph) {
    const n = graph.length;
    let colors = Array(n).fill(0);

    const dfs = (node, color) => {
        if (colors[node] === 0) {
            colors[node] = color;
        } else if (colors[node] !== color) {
            return false;
        } else {
            return true;
        }

        const connections = graph[node];
        for (let i = 0; i < connections.length; i++) {
            if (!dfs(connections[i], color * -1)) {
                return false;
            }
        }

        return true;
    }

    for (let i = 0; i < n; i++) {
        if (colors[i] === 0) {
            if (!dfs(i, 1)) {
                return false;
            };
        }
    }

    return true;
};