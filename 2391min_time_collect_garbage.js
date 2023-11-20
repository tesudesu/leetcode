// https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/

var garbageCollection = function (garbage, travel) {
    let lastG = -1;
    let lastM = -1;
    let lastP = -1;
    let tot = 0;

    for (let i = garbage.length - 1; i >= 0; i--) {
        if (lastG !== -1 && lastM !== -1 && lastP !== -1) break;
        for (let j = 0; j < garbage[i].length; j++) {
            if (garbage[i][j] === "G" && lastG === -1) {
                lastG = i;
            } else if (garbage[i][j] === "M" && lastM === -1) {
                lastM = i;
            } else if (garbage[i][j] === "P" && lastP === -1) {
                lastP = i;
            }
        }
    }

    for (let i = 0; i < garbage.length; i++) {
        tot += garbage[i].length;
    }

    let gTime = 0;
    for (let i = 0; i < lastG; i++) {
        gTime += travel[i];
    }

    let mTime = 0;
    for (let i = 0; i < lastM; i++) {
        mTime += travel[i];
    }

    let pTime = 0;
    for (let i = 0; i < lastP; i++) {
        pTime += travel[i];
    }

    return tot + gTime + mTime + pTime;
};