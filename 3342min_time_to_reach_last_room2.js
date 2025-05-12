// https://leetcode.com/problems/find-minimum-time-to-reach-last-room-ii/

var minTimeToReach = function(moveTime) {
    const n = moveTime.length;
    const m = moveTime[0].length;
    const minQueue = new MinPriorityQueue(a => a[0]);
    minQueue.enqueue([0, 0, 0, 1]);
    const directions = [[0, -1], [0, 1], [-1, 0], [1, 0]];
    const minTime = Array(n).fill().map(() => Array(m).fill(Infinity));

    while (minQueue.size() > 0) {
        const [time, x, y, moveValue] = minQueue.dequeue();
        if (x === n - 1 && y === m - 1) {
            return time;
        }
        for (const [dx, dy] of directions) {
            let newX = x + dx;
            let newY = y + dy;
            if (newX >= 0 && newX < n && newY >= 0 && newY < m) {
                let timeToReach = time >= moveTime[newX][newY] ? time : moveTime[newX][newY];
                timeToReach += moveValue;
                
                if (timeToReach < minTime[newX][newY]) {
                    let newMoveValue = moveValue === 1 ? 2 : 1;
                    minQueue.enqueue([timeToReach, newX, newY, newMoveValue]);
                    minTime[newX][newY] = timeToReach;
                }
            }
        }
    }
};