// https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/

var maxDiff = function(num) {
    let max = String(num).split("");

    let i = 0;

    while (max[i] === "9") {
        i++;
    }

    if (i < max.length) {
        let change = max[i];
        for (let j = i; j < max.length; j++) {
            if (max[j] === change) {
                max[j] = "9";
            }
        }
    }

    let min = String(num).split("");

    i = 0;

    while (min[i] === "1" || min[i] === "0") {
        i++;
    }

    if (i !== 0 && i < min.length) {
        let change = min[i];
        for (let j = i; j < min.length; j++) {
            if (min[j] === change) {
                min[j] = "0";
            }
        }
    } else if (i === 0) {
        let change = min[0];
        for (let j = i; j < min.length; j++) {
            if (min[j] === change) {
                min[j] = "1";
            }
        }
    }

    return Number(max.join("")) - Number(min.join(""));
};