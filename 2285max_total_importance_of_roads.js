// https://leetcode.com/problems/maximum-total-importance-of-roads/

var maximumImportance = function(n, roads) {
    let connections = Array(n).fill(0);

    for (const [a, b] of roads) {
        connections[a]++;
        connections[b]++;
    }

    connections.sort((a, b) => b - a);

    let tot = 0;

    for (let i = 0; i < connections.length; i++) {
        tot += connections[i] * (n - i);
    }
    
    return tot;
};