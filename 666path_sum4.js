// https://leetcode.com/problems/path-sum-iv/

var pathSum = function(nums) {
    let numsBroken = Array(nums.length).fill();
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let arr = Array(3).fill();
        arr[2] = num % 10;
        num = Math.floor(num / 10);
        arr[1] = num % 10;
        num = Math.floor(num / 10);
        arr[0] = num;
        numsBroken[i] = arr;
    }

    let maxLevel = numsBroken[numsBroken.length - 1][0];
    let tot = 0;
    
    const dfs = (level, position, sum) => {
        if (level === maxLevel) {
            tot += sum;
            return;
        }

        let hasChildren = false;

        for (let i = 0; i < numsBroken.length; i++) {
            const [lvl, pos, val] = numsBroken[i];
            if (lvl === level + 1) {
                if (pos === 2 * position - 1) {
                    dfs(level + 1, 2 * position - 1, sum + val);
                    hasChildren = true;
                } else if (pos === 2 * position) {
                    dfs(level + 1, 2 * position, sum + val);
                    hasChildren = true;
                }
            }
        }

        if (!hasChildren) {
            tot += sum;
            return;
        }
    }

    dfs(0, 1, 0);

    return tot;
};