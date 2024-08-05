// https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/

// Dijkstra

var findTheCity = function(n, edges, distanceThreshold) {
    let map = new Map();

    for (const [a, b, weight] of edges) {
        if (map.has(a)) {
            let arr = map.get(a);
            arr.push([b, weight]);
            map.set(a, arr);
        } else {
            map.set(a, [[b, weight]]);
        }
        if (map.has(b)) {
            let arr = map.get(b);
            arr.push([a, weight]);
            map.set(b, arr);
        } else {
            map.set(b, [[a, weight]]);
        }
    }

    let city;
    let connections = Infinity;
    
    for (let i = 0; i < n; i++) {
        let minQueue = new MinPriorityQueue({priority: a => a[0]});
        minQueue.enqueue([0, i]);
        let visited = new Set();

        while (!minQueue.isEmpty()) {
            const [dist, node] = minQueue.dequeue().element;
            if (!map.has(node)) {
                continue;
            }
            visited.add(node);
            const nextNodes = map.get(node);
            for (const [nextNode, newDist] of nextNodes) {
                if (visited.has(nextNode)) {
                    continue;
                }
                if (dist + newDist <= distanceThreshold) {
                    minQueue.enqueue([dist + newDist, nextNode]);
                }
            }
        }

        if (visited.size <= connections) {
            city = i;
            connections = visited.size;
        }
    }

    return city;
};


// Bellman-Ford (can work for negative weights)

var findTheCity = function(n, edges, distanceThreshold) {
    let city;
    let connections = Infinity;

    for (let i = 0; i < n; i++) {
        const shortestPath = Array(n).fill(Infinity);
        shortestPath[i] = 0;
        let updated = false;
        for (let j = 0; j < n - 1; j++) {
            for (const [a, b, weight] of edges) {
                if (shortestPath[a] !== Infinity) {
                    if (shortestPath[b] > shortestPath[a] + weight) {
                        shortestPath[b] = shortestPath[a] + weight;
                        updated = true;
                    }
                }
                if (shortestPath[b] !== Infinity) {
                    if (shortestPath[a] > shortestPath[b] + weight) {
                        shortestPath[a] = shortestPath[b] + weight;
                        updated = true;
                    }
                }
            }
            if (!updated) {
                break;
            }
        }
        let canReach = 0;
        for (let j = 0; j < shortestPath.length; j++) {
            if (shortestPath[j] <= distanceThreshold) {
                canReach++;
            }
        }
        if (canReach - 1 <= connections) {
            connections = canReach - 1;
            city = i;
        }
    }

    return city;
};


// Shortest Path First Algorithm (SPFA)

var findTheCity = function(n, edges, distanceThreshold) {
    let map = new Map();

    for (const [a, b, weight] of edges) {
        if (map.has(a)) {
            let arr = map.get(a);
            arr.push([b, weight]);
            map.set(a, arr);
        } else {
            map.set(a, [[b, weight]]);
        }
        if (map.has(b)) {
            let arr = map.get(b);
            arr.push([a, weight]);
            map.set(b, arr);
        } else {
            map.set(b, [[a, weight]]);
        }
    }

    let city;
    let connections = Infinity;

    for (let i = 0; i < n; i++) {
        const shortestPath = Array(n).fill(Infinity);
        shortestPath[i] = 0;
        const queue = new Queue();
        queue.enqueue(i);

        while (!queue.isEmpty()) {
            const curr = queue.dequeue();
            if (!map.has(curr)) {
                continue;
            }
            const neighbors = map.get(curr);
            for (const [neighbor, weight] of neighbors) {
                if (shortestPath[neighbor] > shortestPath[curr] + weight) {
                    shortestPath[neighbor] = shortestPath[curr] + weight;
                    queue.enqueue(neighbor);
                }
            }
        }

        let canReach = 0;
        for (let j = 0; j < shortestPath.length; j++) {
            if (shortestPath[j] <= distanceThreshold) {
                canReach++;
            }
        }
        if (canReach - 1 <= connections) {
            connections = canReach - 1;
            city = i;
        }
    }

    return city;
};


// Floyd-Warshall 

var findTheCity = function(n, edges, distanceThreshold) {
    const dist = Array(n).fill().map(() => Array(n).fill(Infinity));
    for (let i = 0; i < n; i++) {
        dist[i][i] = 0;
    }

    for (const [a, b, weight] of edges) {
        dist[a][b] = weight;
        dist[b][a] = weight;
    }

    for (let intermediate = 0; intermediate < n; intermediate++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                if (dist[j][k] > dist[j][intermediate] + dist[intermediate][k]) {
                    dist[j][k] = dist[j][intermediate] + dist[intermediate][k];
                }
            }
        }
    }

    let city;
    let connections = Infinity;

    for (let i = 0; i < n; i++) {
        let canReach = 0;
        for (let j = 0; j < n; j++) {
            if (dist[i][j] <= distanceThreshold) {
                canReach++;
            }
        }
        if (canReach - 1 <= connections) {
            connections = canReach - 1;
            city = i;
        }
    }

    return city;
};
