// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/

var findMinArrowShots = function(points) {
    points.sort((a, b) => a[0] - b[0]);

    let arrow = 1;
    let arrowPoint = points[0][1];

    for (let i = 1; i < points.length; i++) {
        if (points[i][0] > arrowPoint) {
            arrow++;
            arrowPoint = points[i][1];
        } else {
            arrowPoint = Math.min(arrowPoint, points[i][1]);
        }
    }

    return arrow;
};


var findMinArrowShots = function(points) {
    points.sort((a, b) => {
        return a[0] - b[0];
    })

    let curr = points[0];
    let tot = 1;

    for (let i = 1; i < points.length; i++) {
        const [start, end] = points[i];
        if (start > curr[1]) {
            tot++;
            curr = points[i];
        } else {
            curr[0] = Math.max(start, curr[0]);
            curr[1] = Math.min(end, curr[1]);
        }
    }

    return tot;
};