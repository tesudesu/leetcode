// https://leetcode.com/problems/k-th-nearest-obstacle-queries/

var resultsArray = function(queries, k) {
    const maxQueue = new MaxPriorityQueue();
    const ans = Array(queries.length).fill(-1);

    for (let i = 0; i < queries.length; i++) {
        const dist = Math.abs(queries[i][0]) + Math.abs(queries[i][1]);

        maxQueue.enqueue(dist);
        if (maxQueue.size() > k) {
            maxQueue.dequeue();
        }
        if (maxQueue.size() === k) {
            ans[i] = maxQueue.front().element;
        } 
    }

    return ans;
};