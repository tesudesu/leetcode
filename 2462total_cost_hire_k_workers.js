// https://leetcode.com/problems/total-cost-to-hire-k-workers/

const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

var totalCost = function (costs, k, candidates) {
    let tot = 0;

    let left = new MinPriorityQueue();

    let right = new MinPriorityQueue();

    for (let i = 0; i < candidates; i++) {
        left.enqueue(costs[i]);
    }

    let currLeftInd = candidates;
    
    for (let i = costs.length - 1; i > Math.max(costs.length - 1 - candidates, currLeftInd - 1); i--) {
        right.enqueue(costs[i]);
    }

    let currRightInd = Math.max(costs.length - 1 - candidates, currLeftInd - 1);

    for (let i = 1; i <= k; i++) {
        if (left.isEmpty() && right.isEmpty()) {
            return tot;
        }

        if (left.isEmpty()) {
            tot += right.dequeue();
            continue;
        }

        if (right.isEmpty()) {
            tot += left.dequeue();
            continue;
        }

        const leftMin = left.front();
        const rightMin = right.front();

        if (currLeftInd > currRightInd) {
            if (leftMin <= rightMin) {
                tot += left.dequeue();
            } else {
                tot += right.dequeue();
            }
        } else {
            if (leftMin <= rightMin) {
                tot += left.dequeue();
                left.enqueue(costs[currLeftInd]);
                currLeftInd++;
            } else {
                tot += right.dequeue();
                right.enqueue(costs[currRightInd]);
                currRightInd--;
            }
        } 

    }

    return tot;
};