// https://leetcode.com/problems/build-a-matrix-with-conditions/

var buildMatrix = function(k, rowConditions, colConditions) {
    const topo = (condition) => {
        const indegree = Array(k + 1).fill(0);
        const map = Array(k + 1).fill().map(() => Array(0).fill());
        for (const [a, b] of condition) {
            indegree[b]++;
            map[a].push(b);
        }

        const queue = new Queue();
        for (let i = 1; i <= k; i++) {
            if (indegree[i] === 0) {
                queue.push(i);
            }
        }

        let order = [];

        while (!queue.isEmpty()) {
            const length = queue.size();
            for (let i = 0; i < length; i++) {
                const curr = queue.dequeue();
                order.push(curr);
                const next = map[curr];
                for (let j = 0; j < next.length; j++) {
                    indegree[next[j]]--;
                    if (indegree[next[j]] === 0) {
                        queue.enqueue(next[j]);
                    }
                }
            }
        }

        return order;
    }

    const rowOrder = topo(rowConditions);
    if (rowOrder.length < k) {
        return [];
    }
    const colOrder = topo(colConditions);
    if (colOrder.length < k) {
        return [];
    }

    const ans = Array(k).fill().map(() => Array(k).fill(0));

    for (let i = 0; i < k; i++) {
        for (let j = 0; j < k; j++) {
            if (rowOrder[i] === colOrder[j]) {
                ans[i][j] = rowOrder[i];
            }
        }
    }

    return ans;
};