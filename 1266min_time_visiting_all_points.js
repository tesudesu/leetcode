// https://leetcode.com/problems/minimum-time-visiting-all-points/

var minTimeToVisitAllPoints = function(points) {
    let dist = 0;

    for (let i = 1; i < points.length; i++) {
        dist += Math.max(Math.abs(points[i][0] - points[i - 1][0]), Math.abs(points[i][1] - points[i - 1][1]));
    }

    return dist;
};