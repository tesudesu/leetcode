// https://leetcode.com/problems/path-with-minimum-effort/

var minimumEffortPath = function(heights) {
    const dfs = (x, y, mid, visited) => {
        visited[x][y] = true;

        if (x - 1 >= 0) {
            if (!visited[x - 1][y] && Math.abs(heights[x][y] - heights[x - 1][y]) <= mid) {
                dfs(x - 1, y, mid, visited);
            }
        }
        if (x + 1 < heights.length) {
            if (!visited[x + 1][y] && Math.abs(heights[x][y] - heights[x + 1][y]) <= mid) {
                dfs(x + 1, y, mid, visited);
            }
        }
        if (y - 1 >= 0) {
            if (!visited[x][y - 1] && Math.abs(heights[x][y] - heights[x][y - 1]) <= mid) {
                dfs(x, y - 1, mid, visited);
            }
        }
        if (y + 1 < heights[0].length) {
            if (!visited[x][y + 1] && Math.abs(heights[x][y] - heights[x][y + 1]) <= mid) {
                dfs(x, y + 1, mid, visited);
            }
        }
    }

    let start = 0;
    let end = 1e6;

    let res = 1e6;

    while (start <= end) {
        let visited = Array(heights.length).fill().map(() => Array(heights[0].length).fill(false));

        let mid = Math.floor((end - start) / 2) + start;

        dfs(0, 0, mid, visited);

        if (visited[heights.length - 1][heights[0].length - 1]) {
            res = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return res;
};