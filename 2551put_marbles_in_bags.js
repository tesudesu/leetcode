// https://leetcode.com/problems/put-marbles-in-bags/

var putMarbles = function(weights, k) {
    const minQueue = new MinPriorityQueue();
    const maxQueue = new MaxPriorityQueue();

    for (let i = 0; i < weights.length - 1; i++) {
        let sum = weights[i] + weights[i + 1];
        minQueue.enqueue(sum);
        maxQueue.enqueue(sum);
    }

    let minScore = 0;
    let maxScore = 0;

    for (let i = 1; i < k; i++) {
        minScore += minQueue.dequeue();
        maxScore += maxQueue.dequeue();
    }

    return maxScore - minScore;
};