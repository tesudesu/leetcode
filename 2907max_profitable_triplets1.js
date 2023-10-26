// https://leetcode.com/problems/maximum-profitable-triplets-with-increasing-prices-i/

var maxProfit = function(prices, profits) {
    let max = -1;

    for (let i = 1; i < prices.length - 1; i++) {
        let maxLeft = -Infinity;
        for (let j = 0; j < i; j++) {
            if (prices[i] > prices[j]) {
                maxLeft = Math.max(maxLeft, profits[j]);
            }
        }
        let maxRight = -Infinity;
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] > prices[i]) {
                maxRight = Math.max(maxRight, profits[j]);
            }
        }
        max = Math.max(max, profits[i] + maxLeft + maxRight);
    }

    return max;
};


// const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

// var maxProfit = function(prices, profits) {
//     let bestLeft = Array(prices.length).fill(-Infinity);
//     let bestRight = Array(prices.length).fill(-Infinity);

//     let maxQueue = new MaxPriorityQueue(a => a[0]);
//     maxQueue.enqueue([profits[0], prices[0]]);

//     for (let i = 1; i < prices.length - 1; i++) {
//         let temp = [];
//         while (maxQueue.size() > 0 && maxQueue.front()[1] >= prices[i]) {
//             const elem = maxQueue.dequeue();
//             temp.push(elem);
//         }
//         if (maxQueue.size() > 0) {
//             bestLeft[i] = maxQueue.front()[0];
//         }
//         for (let j = 0; j < temp.length; j++) {
//             maxQueue.enqueue(temp[j]);
//         }
//         maxQueue.enqueue([profits[i], prices[i]]);
//     }

//     maxQueue = new MaxPriorityQueue(a => a[0]);
//     maxQueue.enqueue([profits[profits.length - 1], prices[prices.length - 1]]);

//     for (let i = prices.length - 2; i >= 0; i--) {
//         let temp = [];
//         while (maxQueue.size() > 0 && maxQueue.front()[1] <= prices[i]) {
//             const elem = maxQueue.dequeue();
//             temp.push(elem);
//         }
//         if (maxQueue.size() > 0) {
//             bestRight[i] = maxQueue.front()[0];
//         }
//         for (let j = 0; j < temp.length; j++) {
//             maxQueue.enqueue(temp[j]);
//         }
//         maxQueue.enqueue([profits[i], prices[i]]);
//     }

//     let maxProfit = -1;

//     for (let i = 1; i < profits.length - 1; i++) {
//         maxProfit = Math.max(maxProfit, profits[i] + bestLeft[i] + bestRight[i]);
//     }

//     return maxProfit;
// };