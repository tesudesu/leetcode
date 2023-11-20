// https://leetcode.com/problems/eliminate-maximum-number-of-monsters/

var eliminateMaximum = function(dist, speed) {
    let timesToReach = Array(dist.length).fill();

    for (let i = 0; i < timesToReach.length; i++) {
        timesToReach[i] = dist[i] / speed[i];
    }

    timesToReach.sort((a, b) => a - b);

    let eliminated = 1;

    for (let i = 1; i < timesToReach.length; i++) {
        if (timesToReach[i] > i) {
            eliminated++;
        } else {
            break;
        }
    }

    return eliminated;
};