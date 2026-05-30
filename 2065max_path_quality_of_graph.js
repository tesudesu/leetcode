// https://leetcode.com/problems/maximum-path-quality-of-a-graph/

var maximalPathQuality = function(values, edges, maxTime) {
    const connections = Array(values.length).fill().map(() => Array());

    for (const [a, b, time] of edges) {
        connections[a].push([b, time]);
        connections[b].push([a, time]);
    }

    let ans = 0;
    const visitCount = Array(values.length).fill(0);
    visitCount[0] = 1;

    const traverse = (curr, time, quality) => {
        if (time > maxTime) return;

        if (visitCount[curr] === 1) {
            quality += values[curr];
        }

        if (curr === 0) {
            ans = Math.max(ans, quality);
        }

        const neighbors = connections[curr];

        for (const [neighbor, cost] of neighbors) {
            visitCount[neighbor]++;
            traverse(neighbor, time + cost, quality);
            visitCount[neighbor]--;
        }
    }

    traverse(0, 0, 0);

    return ans;
};


var maximalPathQuality = function(values, edges, maxTime) {
    const connections = Array(values.length).fill().map(() => Array());

    for (const [a, b, time] of edges) {
        connections[a].push([b, time]);
        connections[b].push([a, time]);
    }

    let ans = 0;
    const visitCount = Array(values.length).fill(0);
    visitCount[0] = 1;

    const traverse = (curr, time, quality) => {
        if (time > maxTime) return;

        if (curr === 0) {
            ans = Math.max(ans, quality);
        }

        const neighbors = connections[curr];

        for (const [neighbor, cost] of neighbors) {
            const newQuality = visitCount[neighbor] === 0 ? values[neighbor] + quality : quality;
            visitCount[neighbor]++;
            traverse(neighbor, time + cost, newQuality);
            visitCount[neighbor]--;
        }
    }

    traverse(0, 0, values[0]);

    return ans;
};