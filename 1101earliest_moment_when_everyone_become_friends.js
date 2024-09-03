// https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/

var earliestAcq = function(logs, n) {
    logs.sort((a, b) => a[0] - b[0]);

    const roots = Array(n).fill();
    const rank = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        roots[i] = i;
    }

    const find = (person) => {
        if (roots[person] === person) {
            return person;
        }
        roots[person] = find(roots[person]);
        return roots[person];
    }

    const union = (person1, person2) => {
        const root1 = find(person1);
        const root2 = find(person2);
        if (root1 === root2) {
            return false;
        }
        if (rank[root1] > rank[root2]) {
            roots[root2] = root1;
        } else if (rank[root1] < rank[root2]) {
            roots[root1] = root2;
        } else {
            roots[root1] = root2;
            rank[root2]++;
        }
        return true;
    }

    let groups = n;

    for (const [time, a, b] of logs) {
        if (union(a, b)) {
            groups--;
        }
        if (groups === 1) {
            return time;
        }
    }

    return -1;
};