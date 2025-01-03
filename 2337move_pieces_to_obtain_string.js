// https://leetcode.com/problems/move-pieces-to-obtain-a-string/

var canChange = function(start, target) {
    let startStr = [];
    let targetStr = [];

    for (let i = 0; i < start.length; i++) {
        if (start[i] !== "_") {
            startStr.push(start[i]);
        } 
        if (target[i] !== "_") {
            targetStr.push(target[i]);
        }
    }

    if (startStr.join("") !== targetStr.join("")) {
        return false;
    }

    let targetRightIndices = [];
    let targetLeftIndices = [];
    let startRightIndices = [];
    let startLeftIndices = [];

    for (let i = 0; i < start.length; i++) {
        if (start[i] === "R") {
            startRightIndices.push(i);
        } else if (start[i] === "L") {
            startLeftIndices.push(i);
        }
        if (target[i] === "R") {
            targetRightIndices.push(i);
        } else if (target[i] === "L") {
            targetLeftIndices.push(i);
        }
    }

    for (let i = 0; i < targetRightIndices.length; i++) {
        if (targetRightIndices[i] < startRightIndices[i]) {
            return false;
        }
    }

    for (let i = 0; i < targetLeftIndices.length; i++) {
        if (targetLeftIndices[i] > startLeftIndices[i]) {
            return false;
        }
    }

    return true;
};