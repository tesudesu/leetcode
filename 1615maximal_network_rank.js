// https://leetcode.com/problems/maximal-network-rank/

var maximalNetworkRank = function(n, roads) {
    let degrees = Array(n).fill(0);

    const connections = {};

    for (let i = 0; i < roads.length; i++) {
        degrees[roads[i][0]]++;
        degrees[roads[i][1]]++;

        if (!connections[roads[i][0]]) {
            connections[roads[i][0]] = [roads[i][1]];
        } else {
            connections[roads[i][0]].push(roads[i][1]);
        }

        if (!connections[roads[i][1]]) {
            connections[roads[i][1]] = [roads[i][0]];
        } else {
            connections[roads[i][1]].push(roads[i][0]);
        }
    }

    let max = 0;

    for (let i = 0; i < degrees.length - 1; i++) {
        for (let j = i + 1; j < degrees.length; j++) {
            let num = degrees[i] + degrees[j];
            let connection = connections[i];
            if (connection) {
                for (let k = 0; k < connection.length; k++) {
                    if (connection[k] === j) {
                        num--;
                        break;
                    }
                }
            }
            max = Math.max(num, max);
        }
    }

    return max;
};