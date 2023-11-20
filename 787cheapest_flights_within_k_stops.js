// https://leetcode.com/problems/cheapest-flights-within-k-stops/

const { Queue } = require('@datastructures-js/queue');
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

// BFS

var findCheapestPrice = function(n, flights, src, dst, k) {
    let map = new Map();

    for (let i = 0; i < flights.length; i++) {
        const [from, to, price] = flights[i];
        if (map.has(from)) {
            let arr = map.get(from);
            arr.push([to, price]);
            map.set(from, arr);
        } else {
            map.set(from, [[to, price]]);
        }
    }

    const queue = new Queue();
    queue.enqueue([src, 0]);
    let res = Infinity;
    const cheapestToCity = new Map();

    let stops = 0;

    while (stops <= k && queue.size() > 0) {
        const length = queue.size();
        for (let j = 0; j < length; j++) {
            const [city, sum] = queue.dequeue();
            cheapestToCity.set(city, sum);
            if (map.has(city)) {
                let nextCities = map.get(city);
                for (let k = 0; k < nextCities.length; k++) {
                    const [nextCity, ticket] = nextCities[k];
                    if (nextCity === dst) {
                        res = Math.min(res, sum + ticket);
                    } else {
                        if (cheapestToCity.has(nextCity)) {
                            const currCostToNextCity = cheapestToCity.get(nextCity);
                            if (currCostToNextCity > sum + ticket) {
                                queue.enqueue([nextCity, sum + ticket]);
                            }
                        } else {
                            queue.enqueue([nextCity, sum + ticket]);
                        }
                        
                    }
                }
            }
        }
        stops++;
    }

    return res !== Infinity ? res : -1;
};


// Bellman Ford

var findCheapestPrice = function(n, flights, src, dst, k) {
    let costsTo = Array(n).fill(Infinity);
    costsTo[src] = 0;

    let stops = 0;

    while (stops <= k) {
        let costsAfterStop = [...costsTo];
        for (let i = 0; i < flights.length; i++) {
            const [from, to, cost] = flights[i];
            if (costsTo[from] + cost < costsAfterStop[to]) {
                costsAfterStop[to] = costsTo[from] + cost;
            }
        }
        costsTo = costsAfterStop;
        stops++;
    }

    return costsTo[dst] !== Infinity ? costsTo[dst] : -1;
};


// Dijkstra

var findCheapestPrice = function (n, flights, src, dst, k) {
    let map = new Map();

    for (let i = 0; i < flights.length; i++) {
        const [from, to, price] = flights[i];
        if (map.has(from)) {
            let arr = map.get(from);
            arr.push([to, price]);
            map.set(from, arr);
        } else {
            map.set(from, [[to, price]]);
        }
    }

    let stepsTaken = Array(n).fill(Infinity);

    const minQueue = new MinPriorityQueue(a => a[1]);
    minQueue.enqueue([src, 0, 0]);

    while (!minQueue.isEmpty()) {
        const [node, costSoFar, steps] = minQueue.dequeue();
        if (node === dst && steps <= k + 1) {
            return costSoFar;
        }
        if (steps >= k + 1) continue;
        stepsTaken[node] = steps;
        if (map.has(node)) {
            let nextCities = map.get(node);
            for (let i = 0; i < nextCities.length; i++) {
                const [nextCity, addedCost] = nextCities[i];
                if (stepsTaken[nextCity] < steps + 1) continue;
                minQueue.enqueue([nextCity, costSoFar + addedCost, steps + 1]);
            }
        }
    }

    return -1;
};