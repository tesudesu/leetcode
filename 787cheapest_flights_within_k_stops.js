// https://leetcode.com/problems/cheapest-flights-within-k-stops/

const { Queue } = require('@datastructures-js/queue');
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

// BFS

var findCheapestPrice = function(n, flights, src, dst, k) {
    const map = new Map();

    for (const [from, to, cost] of flights) {
        if (!map.has(from)) {
            map.set(from, [[to, cost]]);
        } else {
            let arr = map.get(from);
            arr.push([to, cost]);
            map.set(from, arr);
        }
    }

    const queue = new Queue();
    queue.enqueue([src, 0]);
    const minCost = Array(n).fill(Infinity);
    minCost[src] = 0;

    while (!queue.isEmpty() && k >= 0) {
        const length = queue.size();

        for (let i = 0; i < length; i++) {
            const [curr, cost] = queue.dequeue();

            if (!map.has(curr)) continue;

            const nextCities = map.get(curr);

            for (const [nextCity, newCost] of nextCities) {
                if (cost + newCost < minCost[nextCity]) {
                    minCost[nextCity] = cost + newCost;
                    queue.enqueue([nextCity, cost + newCost]);
                }
            }
        }

        k--;
    }

    return minCost[dst] === Infinity ? -1 : minCost[dst];
};


// Bellman Ford

var findCheapestPrice = function (n, flights, src, dst, k) {
    let dist = Array(n).fill(Infinity);
    dist[src] = 0;

    for (let i = 0; i <= k; i++) {
        let temp = dist.slice();
        for (const [from, to, cost] of flights) {
            if (dist[from] + cost < temp[to]) {
                temp[to] = dist[from] + cost;
            }
        }
        dist = temp;
    }

    return dist[dst] === Infinity ? -1 : dist[dst];
};


// Dijkstra

var findCheapestPrice = function (n, flights, src, dst, k) {
    const map = new Map();

    for (const [from, to, cost] of flights) {
        if (!map.has(from)) {
            map.set(from, [[to, cost]]);
        } else {
            let arr = map.get(from);
            arr.push([to, cost]);
            map.set(from, arr);
        }
    }

    const minQueue = new MinPriorityQueue(a => a[1]);
    minQueue.enqueue([src, 0, -1]);
    const stops = Array(n).fill(Infinity);

    while (!minQueue.isEmpty()) {
        const [city, cost, currStops] = minQueue.dequeue();

        if (currStops >= stops[city] || currStops > k) continue;

        stops[city] = currStops;

        if (city === dst) {
            return cost;
        }

        if (!map.has(city)) continue;

        const nextCities = map.get(city);

        for (const [nextCity, newCost] of nextCities) {
            minQueue.enqueue([nextCity, cost + newCost, currStops + 1]);
        }
    }

    return -1;
};


// var findCheapestPrice = function (n, flights, src, dst, k) {
//     let map = new Map();

//     for (let i = 0; i < flights.length; i++) {
//         const [from, to, price] = flights[i];
//         if (map.has(from)) {
//             let arr = map.get(from);
//             arr.push([to, price]);
//             map.set(from, arr);
//         } else {
//             map.set(from, [[to, price]]);
//         }
//     }

//     let stepsTaken = Array(n).fill(Infinity);

//     const minQueue = new MinPriorityQueue(a => a[1]);
//     minQueue.enqueue([src, 0, 0]);

//     while (!minQueue.isEmpty()) {
//         const [node, costSoFar, steps] = minQueue.dequeue();
//         if (node === dst && steps <= k + 1) {
//             return costSoFar;
//         }
//         if (steps >= k + 1) continue;
//         stepsTaken[node] = steps;
//         if (map.has(node)) {
//             let nextCities = map.get(node);
//             for (let i = 0; i < nextCities.length; i++) {
//                 const [nextCity, addedCost] = nextCities[i];
//                 if (stepsTaken[nextCity] < steps + 1) continue;
//                 minQueue.enqueue([nextCity, costSoFar + addedCost, steps + 1]);
//             }
//         }
//     }

//     return -1;
// };