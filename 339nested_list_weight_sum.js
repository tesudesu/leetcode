// https://leetcode.com/problems/nested-list-weight-sum/

// DFS

var depthSum = function(nestedList) {
    let tot = 0;

    const dfs = (list, level) => {
        if (list.isInteger()) {
            tot += list.getInteger() * level;
            return;
        }
        const nested = list.getList();
        for (let i = 0; i < nested.length; i++) {
            dfs(nested[i], level + 1);
        }
    }

    for (let i = 0; i < nestedList.length; i++) {
        dfs(nestedList[i], 1);
    }

    return tot;
};


// BFS

var depthSum = function (nestedList) {
    let tot = 0;
    let level = 1;

    let stack = [];
    for (let i = 0; i < nestedList.length; i++) {
        stack.push(nestedList[i]);
    }

    while (stack.length > 0) {
        const length = stack.length;
        let newLevel = [];
        for (let i = 0; i < length; i++) {
            const curr = stack.pop();
            if (curr.isInteger()) {
                tot += curr.getInteger() * level;
            } else {
                const nested = curr.getList();
                for (let j = 0; j < nested.length; j++) {
                    newLevel.push(nested[j]);
                }
            }
        }
        level++;
        stack = newLevel;
    }

    return tot;
};