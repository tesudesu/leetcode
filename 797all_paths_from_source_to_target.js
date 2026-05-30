// https://leetcode.com/problems/all-paths-from-source-to-target/

var allPathsSourceTarget = function(graph) {
    let ans = [];

    let curr = [[0]];

    while (curr.length > 0) {
        let nextLevel = [];
        for (const path of curr) {
            if (path[path.length - 1] === graph.length - 1) {
                ans.push(path);
                continue;
            }
            const neighbors = graph[path[path.length - 1]];
            for (const nei of neighbors) {
                nextLevel.push([...path, nei]);
            }
        }
        curr = nextLevel;
    }

    return ans;
};