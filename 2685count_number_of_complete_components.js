// https://leetcode.com/problems/count-the-number-of-complete-components/

var countCompleteComponents = function(n, edges) {
    const roots = Array(n).fill();
    const rank = Array(n).fill(0);
    const connections = Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        roots[i] = i;
    }

    const find = (node) => {
        if (node === roots[node]) {
            return node;
        }
        roots[node] = find(roots[node]);
        return roots[node];
    }

    const union = (node1, node2) => {
        const root1 = find(node1);
        const root2 = find(node2);

        if (root1 === root2) {
            return;
        }

        if (rank[root1] > rank[root2]) {
            roots[root2] = root1;
        } else if (rank[root1] < rank[root2]) {
            roots[root1] = root2;
        } else {
            roots[root2] = root1;
            rank[root1]++;
        }
    }

    for (const [a, b] of edges) {
        union(a, b);
        connections[a]++;
        connections[b]++;
    }

    const components = Array(n).fill().map(() => Array().fill());

    for (let i = 0; i < n; i++) {
        const root = find(i);
        components[root].push(i); 
    }

    let completeComponents = 0;

    for (let i = 0; i < components.length; i++) {
        if (components[i].length === 0) continue;
        let isComplete = true;
        for (let j = 0; j < components[i].length; j++) {
            if (connections[components[i][j]] !== components[i].length - 1) {
                isComplete = false;
                break;
            }
        }
        if (isComplete) {
            completeComponents++;
        }
    }

    return completeComponents;
};