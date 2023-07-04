// https://leetcode.com/problems/gas-station/

var canCompleteCircuit = function(gas, cost) {
    let netCosts = Array(gas.length);

    for (let i = 0; i < gas.length; i++) {
        netCosts[i] = gas[i] - cost[i];
    }

    let sum = 0;

    for (let i = 0; i < netCosts.length; i++) {
        sum += netCosts[i];
    }

    if (sum < 0) return -1;

    let tot = 0;
    let ind;

    for (let i = 0; i < netCosts.length; i++) {
        if (tot === 0) {
            ind = i;
        }

        tot += netCosts[i];

        if (tot < 0) {
            tot = 0;
        }
    }

    return ind;
};

// Brute force

// var canCompleteCircuit = function(gas, cost) {
//     let netCosts = Array(gas.length);

//     for (let i = 0; i < gas.length; i++) {
//         netCosts[i] = gas[i] - cost[i];
//     }

//     console.log(netCosts)

//     for (let i = 0; i < netCosts.length; i++) {
//         if (netCosts[i] >= 0) {
//             let success = true;
//             let tot = netCosts[i];
//             for (let j = i + 1; j < i + netCosts.length; j++) {
//                 const ind = j % netCosts.length;
//                 tot += netCosts[ind];
//                 if (tot < 0) {
//                     success = false;
//                 }
//             }
//             if (success) return i;
//         }
//     }

//     return -1;
// };