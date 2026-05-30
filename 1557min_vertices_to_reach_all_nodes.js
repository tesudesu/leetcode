// https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/

var findSmallestSetOfVertices = function(n, edges) {
    const ans = new Set();

    for (let i = 0; i < n; i++) {
        ans.add(i);
    }

    for (const [x, y] of edges) {
        ans.delete(y);
    }

    return [...ans];
};