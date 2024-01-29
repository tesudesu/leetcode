// https://leetcode.com/problems/minimum-cost-to-convert-string-i/

// Dijkstra's

const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

var minimumCost = function(source, target, original, changed, cost) {
    const map = {};

    for (let i = 0; i < original.length; i++) {
        const originalCode = original[i].charCodeAt(0) - 97;
        const changedCode = changed[i].charCodeAt(0) - 97;
        if (map[originalCode]) {
            map[originalCode].push([changedCode, cost[i]]);
        } else {
            map[originalCode] = [[changedCode, cost[i]]];
        }
    }

    const minCost = Array(26).fill().map(() => Array(26).fill(Infinity));

    for (let i = 0; i < minCost.length; i++) {
        const minQueue = new MinPriorityQueue(a => a[1]);
        minQueue.enqueue([i, 0]);

        while (!minQueue.isEmpty()) {
            const [curr, cost] = minQueue.dequeue();
            if (cost < minCost[i][curr]) {
                minCost[i][curr] = cost;
                if (map[curr]) {
                    for (let j = 0; j < map[curr].length; j++) {
                        minQueue.enqueue([map[curr][j][0], map[curr][j][1] + cost]);
                    }
                }
            } 
        }
    }

    let tot = 0;

    for (let i = 0; i < source.length; i++) {
        if (source[i] === target[i]) continue;
        const sourceCode = source.charCodeAt(i) - 97;
        const targetCode = target.charCodeAt(i) - 97;
        if (minCost[sourceCode][targetCode] === Infinity) {
            return -1;
        } else {
            tot += minCost[sourceCode][targetCode];
        }
    }

    return tot;
};


// Floyd-Warshall

var minimumCost = function(source, target, original, changed, cost) {
    const minCost = Array(26).fill().map(() => Array(26).fill(Infinity));
    for (let i = 0; i < minCost.length; i++) {
        minCost[i][i] = 0;
    }

    for (let i = 0; i < original.length; i++) {
        const originalCode = original[i].charCodeAt(0) - 97;
        const changedCode = changed[i].charCodeAt(0) - 97;
        const weight = cost[i];

        if (minCost[originalCode][changedCode] > weight) {
            minCost[originalCode][changedCode] = weight;
        }
    }

    for (let i = 0; i < minCost.length; i++) {
        for (let j = 0; j < minCost.length; j++) {
            for (let k = 0; k < minCost.length; k++) {
                if (minCost[j][k] > minCost[j][i] + minCost[i][k]) {
                    minCost[j][k] = minCost[j][i] + minCost[i][k]
                }
            }
        }
    }

    let tot = 0;

    for (let i = 0; i < source.length; i++) {
        if (source[i] === target[i]) continue;
        const sourceCode = source.charCodeAt(i) - 97;
        const targetCode = target.charCodeAt(i) - 97;
        if (minCost[sourceCode][targetCode] === Infinity) {
            return -1;
        } else {
            tot += minCost[sourceCode][targetCode];
        }
    }

    return tot;
};