// https://leetcode.com/problems/furthest-building-you-can-reach/

const { MinPriorityQueue, MaxPriorityQueue } = require('@datastructures-js/priority-queue');

var furthestBuilding = function(heights, bricks, ladders) {
    const minQueue = new MinPriorityQueue();
    let usedBricks = 0;

    for (let i = 1; i < heights.length; i++) {
        const diff = heights[i] - heights[i - 1];
        if (diff > 0) {
            if (minQueue.size() < ladders) {
                minQueue.enqueue(diff);
            } else if (ladders === 0 || minQueue.front() >= diff) {
                usedBricks += diff;
            } else {
                usedBricks += minQueue.dequeue();
                minQueue.enqueue(diff);
            }
        }
        if (usedBricks > bricks) {
            return i - 1;
        }
    }

    return heights.length - 1;
};


// Binary search

var furthestBuilding = function (heights, bricks, ladders) {
    let gaps = [];
    for (let i = 1; i < heights.length; i++) {
        if (heights[i] > heights[i - 1]) {
            gaps.push([heights[i] - heights[i - 1], i]);
        }
    }
    gaps.sort((a, b) => b[0] - a[0]);

    let start = 0;
    let end = heights.length - 1;

    while (start < end) {
        const mid = start + Math.ceil((end - start) / 2);
        let usedBricks = 0;
        let usedLadders = 0;
        let canReach = true;

        for (let i = 0; i < gaps.length; i++) {
            const [gap, index] = gaps[i];
            if (index > mid) continue;
            if (usedLadders < ladders) {
                usedLadders++;
            } else {
                usedBricks += gap;
                if (usedBricks > bricks) {
                    canReach = false;
                    break;
                }
            }
        }

        if (canReach) {
            start = mid;
        } else {
            end = mid - 1;
        }
    }

    return start;
};