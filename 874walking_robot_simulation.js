// https://leetcode.com/problems/walking-robot-simulation/

var robotSim = function(commands, obstacles) {
    const hash = (x, y) => {
        const hashMultiplier = 60001;
        return x + hashMultiplier * y;
    }

    let max = 0;
    let x = 0;
    let y = 0;
    const obstaclesSet = new Set();
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // N, E, S, W
    let currDirection = 0;

    for (const [x, y] of obstacles) {
        obstaclesSet.add(hash(x, y));
    }

    for (const command of commands) {
        if (command === -2) {
            currDirection--;
            if (currDirection < 0) {
                currDirection = 3;
            }
        } else if (command === -1) {
            currDirection++;
            if (currDirection > 3) {
                currDirection = 0;
            }
        } else {
            let dx = directions[currDirection][0];
            let dy = directions[currDirection][1];
            for (let i = 0; i < command; i++) {
                if (obstaclesSet.has(hash(x + dx, y + dy))) {
                    break;
                }
                x += dx;
                y += dy;
            }
            max = Math.max(max, x * x + y * y);
        }
    }

    return max;
};