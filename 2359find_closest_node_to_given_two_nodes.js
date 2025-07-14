// https://leetcode.com/problems/find-closest-node-to-given-two-nodes/

var closestMeetingNode = function(edges, node1, node2) {
    const distFromNode1 = Array(edges.length).fill(-1);
    distFromNode1[node1] = 0;

    const distFromNode2 = Array(edges.length).fill(-1);
    distFromNode2[node2] = 0;

    const bfs = (node, distArr) => {
        let next = edges[node];
        let dist = 1;
        while (next !== -1 && distArr[next] === -1) {
            distArr[next] = dist;
            dist++;
            next = edges[next];
        }
        return;
    }

    bfs(node1, distFromNode1);
    bfs(node2, distFromNode2);

    let ans = -1;
    let minDist = Infinity;

    for (let i = 0; i < edges.length; i++) {
        if (distFromNode1[i] === -1 || distFromNode2[i] === -1) continue;
        let dist = Math.min(Math.max(distFromNode1[i], distFromNode2[i]));
        if (minDist > dist) {
            minDist = dist;
            ans = i;
        }
    }
    
    return ans;
};