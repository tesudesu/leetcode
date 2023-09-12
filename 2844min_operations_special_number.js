// https://leetcode.com/problems/minimum-operations-to-make-a-special-number/

var minimumOperations = function(num) {
    let map = {};

    for (let i = 0; i < num.length; i++) {
        if (num[i] !== "0" && num[i] !== "2" && num[i] !== "5" && num[i] !== "7") continue;
        if (map[num[i]]) {
            map[num[i]].push(i);
        } else {
            map[num[i]] = [i];
        }
    }

    let minDist = Infinity;

    if (Object.keys(map).length === 0) return num.length;

    let checked = false;

    if (map[0] && map[0].length === 1) {
        minDist = Math.min(minDist, num.length - 1);
        checked = true;
    } else if (map[0] && map[0].length >= 2) {
        const arr = map[0];
        const end = num.length - 1 - arr[arr.length - 1];
        minDist = Math.min(minDist, arr[arr.length - 1] - arr[arr.length - 2] - 1 + end);
        checked = true;
    }

    if (map[2] && map[5]) {
        const two = map[2];
        const five = map[5];
        for (let i = 0; i < two.length; i++) {
            for (let j = 0; j < five.length; j++) {
                if (two[i] < five[j]) {
                    const end = num.length - 1 - five[j];
                    minDist = Math.min(minDist, five[j] - two[i] - 1 + end);
                    checked = true;
                }
            }
        }
    }

    if (map[5] && map[0]) {
        const five = map[5];
        const zero = map[0];
        for (let i = 0; i < five.length; i++) {
            for (let j = 0; j < zero.length; j++) {
                if (five[i] < zero[j]) {
                    const end = num.length - 1 - zero[j];
                    minDist = Math.min(minDist, zero[j] - five[i] - 1 + end);
                    checked = true;
                }
            }
        }
    }

    if (map[7] && map[5]) {
        const seven = map[7];
        const five = map[5];
        for (let i = 0; i < seven.length; i++) {
            for (let j = 0; j < five.length; j++) {
                if (seven[i] < five[j]) {
                    const end = num.length - 1 - five[j];
                    minDist = Math.min(minDist, five[j] - seven[i] - 1 + end);
                    checked = true;
                }
            }
        }
    }

    return checked ? minDist : num.length;
};


// var minimumOperations = function(num) {
//     let fiveFound = false;
//     let zeroFound = false;

//     for (let i = num.length - 1; i >= 0; i--) {
//         if (num[i] === "0" && zeroFound) return num.length - i - 2;
//         if (num[i] === "2" && fiveFound) return num.length - i - 2;
//         if (num[i] === "5" && zeroFound) return num.length - i - 2;
//         if (num[i] === "7" && fiveFound) return num.length - i - 2;
//         if (num[i] === "0") zeroFound = true;
//         if (num[i] === "5") fiveFound = true;
//     }

//     return zeroFound ? num.length - 1 : num.length;
// };