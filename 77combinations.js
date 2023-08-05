// https://leetcode.com/problems/combinations/

var combine = function(n, k) {
    let ans = [];

    const dfs = (arr, pos) => {
        if (arr.length === k) {
            ans.push(arr.slice());
            return;
        }

        for (let i = pos; i <= n; i++) {
            arr.push(i);
            dfs(arr, i + 1);
            arr.pop();
        }
    }

    dfs([], 1);

    return ans;
};