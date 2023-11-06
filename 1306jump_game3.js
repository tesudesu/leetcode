// https://leetcode.com/problems/jump-game-iii/

var canReach = function(arr, start) {
    let visited = Array(arr.length).fill(false);
    
    const dfs = (i) => {
        if (arr[i] === 0) return true;
        if (i < 0 || i >= arr.length) return false;
        if (visited[i]) return false;

        visited[i] = true;

        return dfs(i - arr[i]) || dfs(i + arr[i]);
    }

    return dfs(start);
};