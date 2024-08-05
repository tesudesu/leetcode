// https://leetcode.com/problems/second-minimum-time-to-reach-destination/

var secondMinimum = function(n, edges, time, change) {
    let map = new Map();
    for (const [a, b] of edges) {
        if (!map.has(a)) {
            map.set(a, [b]);
        } else {
            let arr = map.get(a);
            arr.push(b);
            map.set(a, arr);
        }
        if (!map.has(b)) {
            map.set(b, [a]);
        } else {
            let arr = map.get(b);
            arr.push(a);
            map.set(b, arr);
        }
    }

    let steps = -1;
    let prev = new Set([1]);
    let visitCount = Array(n + 1).fill(0);

    while (visitCount[n] < 2) {
        let next = new Set();
        for (const node of prev) {
            visitCount[node]++;
            if (node === n && visitCount[n] === 2) {
                break;
            }
            let neighbors = map.get(node);
            for (const neighbor of neighbors) {
                if (visitCount[neighbor] < 2) {
                    next.add(neighbor);
                }
            }
        }
        prev = next;
        steps++;
    }

    let tot = 0;

    while (steps > 0) {
        if (Math.floor(tot / (change)) % 2 !== 0) {
            tot = tot + change - (tot % change);
        }
        tot += time;
        steps--;
    }

    return tot;
};