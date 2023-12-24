// https://leetcode.com/problems/number-of-possible-sets-of-closing-branches/

var numberOfSets = function(n, maxDistance, roads) {
    let ans = 0;
    let exclude = new Set();
    const dist = Array(n).fill().map(() => Array(n).fill(Infinity));
    for (let i = 0; i < dist.length; i++) {
        dist[i][i] = 0;
    }

    for (let i = 0; i < roads.length; i++) {
        const [a, b, weight] = roads[i];
        if (weight > maxDistance) continue;
        dist[a][b] = Math.min(dist[a][b], weight);
        dist[b][a] = Math.min(dist[b][a], weight);
    }

    const isPossible = (exclude) => {
        const curr = Array(n).fill();
        for (let i = 0; i < n; i++) {
            curr[i] = dist[i].slice();
        }

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                for (let k = 0; k < n; k++) {
                    if (exclude.has(i) || exclude.has(j) || exclude.has(k)) {
                        continue;
                    }
                    if (curr[j][k] > curr[j][i] + curr[i][k]) {
                        curr[j][k] = curr[j][i] + curr[i][k];
                    }
                }
            }
        }

        let possible = true;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (exclude.has(i) || exclude.has(j)) continue;
                if (curr[i][j] > maxDistance) {
                    possible = false;
                    break;
                }
            }
        }

        return possible;
    }

    if (isPossible(exclude)) {
        ans++;
    }
    
    const findCombos = (index) => {
        for (let i = index; i < n; i++) {
            exclude.add(i);
            if (isPossible(exclude)) {
                ans++;
            }
            findCombos(i + 1);
            exclude.delete(i);
        }
    }

    findCombos(0);

    return ans;
};