// https://leetcode.com/problems/design-graph-with-shortest-path-calculator/

// Dijkstra's

const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number} n
 * @param {number[][]} edges
 */
var Graph = function(n, edges) {
    this.connections = new Map();
    for (let i = 0; i < edges.length; i++) {
        const [from, to, cost] = edges[i];
        if (this.connections.has(from)) {
            let arr = this.connections.get(from);
            arr.push([to, cost]);
            this.connections.set(from, arr);
        } else {
            this.connections.set(from, [[to, cost]]);
        }
    }
};

/** 
 * @param {number[]} edge
 * @return {void}
 */
Graph.prototype.addEdge = function(edge) {
    const [from, to, cost] = edge;
    if (this.connections.has(from)) {
        let arr = this.connections.get(from);
        arr.push([to, cost]);
        this.connections.set(from, arr);
    } else {
        this.connections.set(from, [[to, cost]]);
    }
};

/** 
 * @param {number} node1 
 * @param {number} node2
 * @return {number}
 */
Graph.prototype.shortestPath = function(node1, node2) {
    const minQueue = new MinPriorityQueue(a => a[1]);
    minQueue.enqueue([node1, 0]);
    let visited = Array(this.n).fill(false);
    visited[node1] = true;

    while (!minQueue.isEmpty()) {
        const [curr, cost] = minQueue.dequeue().element;
        if (curr === node2) {
            return cost;
        }
        visited[curr] = true;
        if (this.connections.has(curr)) {
            const nextNodes = this.connections.get(curr);
            for (let i = 0; i < nextNodes.length; i++) {
                const [nextNode, addedCost] = nextNodes[i];
                if (!visited[nextNode]) {
                    minQueue.enqueue([nextNode, cost + addedCost]);
                }
            }
        }
    }

    return -1;
};


// Floyd–Warshall

/**
 * @param {number} n
 * @param {number[][]} edges
 */
var Graph = function (n, edges) {
    this.dist = Array(n).fill().map(() => Array(n).fill(Infinity));
    for (let i = 0; i < this.dist.length; i++) {
        this.dist[i][i] = 0;
    }
    for (let i = 0; i < edges.length; i++) {
        const [from, to, cost] = edges[i];
        this.dist[from][to] = cost;
    }
    for (let k = 0; k < this.dist.length; k++) {
        for (let i = 0; i < this.dist.length; i++) {
            for (let j = 0; j < this.dist.length; j++) {
                this.dist[i][j] = Math.min(this.dist[i][j], this.dist[i][k] + this.dist[k][j]);
            }
        }
    }
};

/** 
 * @param {number[]} edge
 * @return {void}
 */
Graph.prototype.addEdge = function (edge) {
    const [from, to, cost] = edge;
    for (let i = 0; i < this.dist.length; i++) {
        for (let j = 0; j < this.dist.length; j++) {
            this.dist[i][j] = Math.min(this.dist[i][j], this.dist[i][from] + this.dist[to][j] + cost);
        }
    }
};

/** 
 * @param {number} node1 
 * @param {number} node2
 * @return {number}
 */
Graph.prototype.shortestPath = function (node1, node2) {
    return this.dist[node1][node2] !== Infinity ? this.dist[node1][node2] : -1;
};