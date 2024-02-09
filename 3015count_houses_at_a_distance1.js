// https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-i/

var countOfPairs = function(n, x, y) {
    const dist = Array(n).fill().map(() => Array(n).fill(Infinity));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            dist[i][j] = Math.abs(i - j);
        }
    }
    dist[x - 1][y - 1] = 1;
    dist[y - 1][x - 1] = 1;

    const ans = Array(n).fill(0);
    
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            dist[i][j] = Math.min(dist[i][j], dist[i][x - 1] + dist[x - 1][y - 1] + dist[y - 1][j], dist[i][y - 1] + dist[y - 1][x - 1] + dist[x - 1][j]);
            ans[dist[i][j] - 1] += 2;
        }
    }

    return ans;
};