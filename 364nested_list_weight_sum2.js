// https://leetcode.com/problems/nested-list-weight-sum-ii/

var depthSumInverse = function(nestedList) {
    let maxDepth = 1;

    const dfs = (element) => {
        if (element.isInteger()) {
            return 1;
        }
        let maxDepth = 1;
        let list = element.getList();
        for (let i = 0; i < list.length; i++) {
            maxDepth = Math.max(maxDepth, 1 + dfs(list[i]));
        }
        return maxDepth;
    }

    for (let i = 0; i < nestedList.length; i++) {
        maxDepth = Math.max(maxDepth, dfs(nestedList[i]));
    }

    let ans = 0;

    const calculate = (element, depth) => {
        if (element.isInteger()) {
            return depth * element.getInteger();
        }

        let ans = 0;

        let list = element.getList();

        for (let i = 0; i < list.length; i++) {
            ans += calculate(list[i], depth - 1);
        }

        return ans;
    }

    for (let i = 0; i < nestedList.length; i++) {
        ans += calculate(nestedList[i], maxDepth);
    }

    return ans;
};