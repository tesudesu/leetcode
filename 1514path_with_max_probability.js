// https://leetcode.com/problems/path-with-maximum-probability/

var maxProbability = function(n, edges, succProb, start_node, end_node) {
    const map = new Map();

    for (let i = 0; i < edges.length; i++) {
        const [a, b] = edges[i];

        if (!map.has(a)) {
            map.set(a, [[b, succProb[i]]]);
        } else {
            let arr = map.get(a);
            arr.push([b, succProb[i]]);
        }
        if (!map.has(b)) {
            map.set(b, [[a, succProb[i]]]);
        } else {
            let arr = map.get(b);
            arr.push([a, succProb[i]]);
        }
    }

    const queue = new Queue();
    queue.enqueue([start_node, 1]);
    const probabilities = Array(n).fill(0);
    probabilities[start_node] = 1;

    while (!queue.isEmpty()) {
        const [curr, currProb] = queue.dequeue();
        if (!map.has(curr)) continue;
        const nextNodes = map.get(curr);

        for (const [nei, prob] of nextNodes) {
            if (probabilities[nei] < currProb * prob) {
                probabilities[nei] = currProb * prob;
                queue.enqueue([nei, currProb * prob]);
            }
        }
    }

    return probabilities[end_node];
};