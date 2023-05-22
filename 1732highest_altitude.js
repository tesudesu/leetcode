// https://leetcode.com/problems/find-the-highest-altitude/

var largestAltitude = function(gain) {
    let point = 0;
    let points = Array(gain.length+1);
    points[0] = 0;
    for (let i = 0; i < gain.length; i++) {
        point += gain[i];
        points[i+1] = point;
    }
    return Math.max(...points);
};