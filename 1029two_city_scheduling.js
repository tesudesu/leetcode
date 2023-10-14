// https://leetcode.com/problems/two-city-scheduling/

var twoCitySchedCost = function(costs) {
    let cache = Array((costs.length / 2) + 1).fill().map(() => Array((costs.length / 2) + 1).fill(0));

    const search = (i, numInA, numInB) => {
        if (i === costs.length) {
            return 0;
        }

        if (cache[numInA][numInB]) return cache[numInA][numInB];

        let sendToA = Infinity;
        let sendToB = Infinity;

        if (numInA > 0) {
            sendToA = costs[i][0] + search(i + 1, numInA - 1, numInB);
        }

        if (numInB > 0) {
            sendToB = costs[i][1] + search(i + 1, numInA, numInB - 1);
        }

        cache[numInA][numInB] = Math.min(sendToA, sendToB);
        return cache[numInA][numInB];
    }

    return search(0, costs.length / 2, costs.length / 2);
};


// Greedy

// var twoCitySchedCost = function(costs) {
//     let diff = Array(costs.length).fill();

//     for (let i = 0; i < costs.length; i++) {
//         diff[i] = [costs[i][0] - costs[i][1], i];
//     }

//     diff.sort((a, b) => b[0] - a[0]);

//     let totalCost = 0;

//     // send to B
//     for (let i = 0; i < diff.length / 2; i++) {
//         totalCost += costs[diff[i][1]][1];
//     }

//     // send to A
//     for (let i = diff.length / 2; i < diff.length; i++) {
//         totalCost += costs[diff[i][1]][0];
//     }

//     return totalCost;
// };


// var twoCitySchedCost = function(costs) {
//     let diff = Array(costs.length).fill();

//     for (let i = 0; i < costs.length; i++) {
//         diff[i] = [costs[i][0] - costs[i][1], i];
//     }

//     diff.sort((a, b) => Math.abs(b[0]) - Math.abs(a[0]));

//     let cityA = 0;
//     let cityB = 0;

//     let totalCost = 0;

//     for (let i = 0; i < diff.length; i++) {
//         if (cityA === costs.length / 2) {
//             totalCost += costs[diff[i][1]][1];
//             cityB++;
//         } else if (cityB === costs.length / 2) {
//             totalCost += costs[diff[i][1]][0];
//             cityA++;
//         } else if (diff[i][0] >= 0) {
//             totalCost += costs[diff[i][1]][1];
//             cityB++;
//         } else {
//             totalCost += costs[diff[i][1]][0];
//             cityA++;
//         }
//     }

//     return totalCost;
// };