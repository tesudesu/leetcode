// https://leetcode.com/problems/process-restricted-friend-requests/

var friendRequests = function (n, restrictions, requests) {
    const group = Array(n).fill().map((e, i) => new Set([i]));

    const restrictionsSet = Array(n).fill().map(() => new Set());

    for (const [x, y] of restrictions) {
        restrictionsSet[x].add(y);
        restrictionsSet[y].add(x);
    }

    const roots = Array(n).fill();
    const rank = Array(n).fill();

    for (let i = 0; i < n; i++) {
        roots[i] = i;
        rank[i] = 0;
    }

    const find = (x) => {
        if (roots[x] === x) {
            return x;
        }
        roots[x] = find(roots[x]);
        return roots[x];
    }

    const ans = Array(requests.length).fill();

    for (let i = 0; i < requests.length; i++) {
        const root1 = find(requests[i][0]);
        const root2 = find(requests[i][1]);

        if (root1 === root2) {
            ans[i] = true;
        }

        let canMerge = true;

        for (const node of group[root1]) {
            for (const member of group[root2]) {
                if (restrictionsSet[node].has(member)) {
                    canMerge = false;
                    break;
                }
            }
            if (!canMerge) {
                break;
            }
        }

        if (!canMerge) {
            ans[i] = false;
            continue;
        }

        ans[i] = true;

        if (rank[root1] > rank[root2]) {
            roots[root2] = root1;
            for (const member of group[root2]) {
                group[root1].add(member);
            }
            for (const restriction of restrictionsSet[root2]) {
                restrictionsSet[root1].add(restriction);
            }
        } else if (rank[root1] < rank[root2]) {
            roots[root1] = root2;
            for (const member of group[root1]) {
                group[root2].add(member);
            }
            for (const restriction of restrictionsSet[root1]) {
                restrictionsSet[root2].add(restriction);
            }
        } else {
            roots[root1] = root2;
            rank[root2]++;
            for (const member of group[root1]) {
                group[root2].add(member);
            }
            for (const restriction of restrictionsSet[root1]) {
                restrictionsSet[root2].add(restriction);
            }
        }
    }

    return ans;
};


// var friendRequests = function(n, restrictions, requests) {
//     const friends = new UnionFind(n);

//     const ans = Array(requests.length).fill(true);

//     for (let i = 0; i < requests.length; i++) {
//         const root1 = friends.find(requests[i][0]);
//         const root2 = friends.find(requests[i][1]);

//         if (root1 === root2) continue;

//         for (const [a, b] of restrictions) {
//             const restrictedRoot1 = friends.find(a);
//             const restrictedRoot2 = friends.find(b);

//             if (root1 === restrictedRoot1 && root2 === restrictedRoot2 || root1 === restrictedRoot2 && root2 === restrictedRoot1) {
//                 ans[i] = false;
//                 break;
//             } 
//         }

//         if (ans[i]) {
//             friends.union(requests[i][0], requests[i][1]);
//         }
//     }

//     return ans;
// };

// class UnionFind {
//     constructor(n) {
//         this.roots = Array(n).fill();
//         this.rank = Array(n).fill();
//         for (let i = 0; i < n; i++) {
//             this.roots[i] = i;
//             this.rank[i] = 0;
//         }
//     }

//     find(x) {
//         if (this.roots[x] === x) {
//             return x;
//         }
//         this.roots[x] = this.find(this.roots[x]);
//         return this.roots[x];
//     }

//     union(x, y) {
//         const root1 = this.find(x);
//         const root2 = this.find(y);
//         if (root1 === root2) {
//             return;
//         }
//         if (this.rank[root1] > this.rank[root2]) {
//             this.roots[root2] = root1;
//         } else if (this.rank[root1] < this.rank[root2]) {
//             this.roots[root1] = root2;
//         } else {
//             this.roots[root1] = root2;
//             this.rank[root2]++;
//         }
//     }
// }