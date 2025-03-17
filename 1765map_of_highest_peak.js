// https://leetcode.com/problems/map-of-highest-peak/

var highestPeak = function(isWater) {
    let ans = Array(isWater.length).fill().map(() => Array(isWater[0].length).fill(-1));

    let stack = [];

    for (let i = 0; i < ans.length; i++) {
        for (let j = 0; j < ans[0].length; j++) {
            if (isWater[i][j] === 1) {
                ans[i][j] = 0;
                stack.push([i, j, 0]);
            } 
        }
    }

    let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    while (stack.length > 0) {
        let newStack = [];
        while (stack.length > 0) {
            let [x, y, num] = stack.pop();
            for (let [dx, dy] of directions) {
                let newX = x + dx;
                let newY = y + dy;
                if (newX >= 0 && newX < isWater.length && newY >= 0 && newY < isWater[0].length) {
                    if (ans[newX][newY] === -1) {
                        ans[newX][newY] = num + 1;
                        newStack.push([newX, newY, num + 1]);
                    }
                }
            }
        }
        stack = newStack;
    }

    return ans;
};