// https://leetcode.com/problems/evaluate-division/

var calcEquation = function(equations, values, queries) {
    let map = new Map();

    for (let i = 0; i < equations.length; i++) {
        const [first, second] = equations[i];
        if (map.has(first)) {
            let arr = map.get(first);
            arr.push([second, values[i]]);
            map.set(first, arr);
        } else {
            map.set(first, [[second, values[i]]]);
        }
        if (map.has(second)) {
            let arr = map.get(second);
            arr.push([first, 1 / values[i]]);
            map.set(second, arr);
        } else {
            map.set(second, [[first, 1 / values[i]]]);
        }
    }

    const dfs = (variable, visited, target, res) => {
        if (variable === target) {
            return res;
        }
        visited.add(variable);
        let nextNums = map.get(variable);

        for (let i = 0; i < nextNums.length; i++) {
            let [nextVariable, value] = nextNums[i];
            if (visited.has(nextVariable)) continue;
            let ans = dfs(nextVariable, visited, target, res * value);
            if (ans !== null) {
                return ans;
            }
        }

        return null;
    }

    let ans = Array(queries.length).fill(-1);

    for (let i = 0; i < queries.length; i++) {
        const [first, second] = queries[i];
        if (!map.has(first) || !map.has(second)) continue;
        if (first === second) {
            ans[i] = 1;
            continue;
        }
        const visited = new Set();
        let res = dfs(first, visited, second, 1);
        if (res !== null) {
            ans[i] = res;
        }
    }

    return ans;
};