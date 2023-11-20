// https://leetcode.com/problems/bus-routes/

const { Queue } = require('@datastructures-js/queue');

var numBusesToDestination = function(routes, source, target) {
    if (source === target) return 0;

    const busToStop = new Map();
    const stopToBus = new Map();
    for (let i = 0; i < routes.length; i++) {
        busToStop.set(i, new Set(routes[i]));
        for (let j = 0; j < routes[i].length; j++) {
            if (stopToBus.has(routes[i][j])) {
                let arr = stopToBus.get(routes[i][j]);
                arr.push(i);
                stopToBus.set(routes[i][j], arr);
            } else {
                stopToBus.set(routes[i][j], [i]);
            }
        }
    }

    const queue = new Queue();
    queue.enqueue(source);
    let busesTook = 0;

    const visitedBus = new Set();
    const visitedStop = new Set();
    visitedStop.add(source);

    while (!queue.isEmpty()) {
        const length = queue.size();
        for (let i = 0; i < length; i++) {
            const stop = queue.dequeue();
            const buses = stopToBus.get(stop);
            for (let i = 0; i < buses.length; i++) {
                if (visitedBus.has(buses[i])) continue;
                visitedBus.add(buses[i]);
                const nextStops = busToStop.get(buses[i]);
                if (nextStops.has(target)) {
                    return busesTook + 1;
                }
                for (const nextStop of nextStops) {
                    if (visitedStop.has(nextStop)) continue;
                    visitedStop.add(nextStop);
                    queue.enqueue(nextStop);
                }
            }
        }
        busesTook++;
    }

    return -1;
};