// https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/

var removeStones = function(stones) {
    const map = new Map();
    const n = stones.length;

    for (let i = 0; i < n; i++) {
        const x = stones[i][0];
        const y = stones[i][1];
        map.set(i, []);
        for (let j = 0; j < n; j++) {
            if (i === j) continue;
            if (x === stones[j][0] || y === stones[j][1]) {
                let arr = map.get(i);
                arr.push(j);
                map.set(i, arr);
            }
        }
    }

    let stonesRemoved = 0;
    const visited = Array(n).fill(false);

    const dfs = (stone) => {
        let connectedStones = map.get(stone);
        let tot = 0;
        for (let i = 0; i < connectedStones.length; i++) {
            if (!visited[connectedStones[i]]) {
                visited[connectedStones[i]] = true;
                tot += 1 + dfs(connectedStones[i]);
            }
        }
        return tot;
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            visited[i] = true;
            stonesRemoved += dfs(i);
        }
    }

    return stonesRemoved;
};