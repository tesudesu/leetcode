// https://leetcode.com/problems/largest-triangle-area/

var largestTriangleArea = function(points) {
    let max = 0;
    let curr = 0;
    for (let i = 0; i < points.length-2; i++) {
        for (let j = i+1; j < points.length-1; j++) {
            for (let k = j+1; k < points.length; k++) {
                curr = Math.abs((points[i][0]*points[j][1] + points[j][0]*points[k][1] + points[k][0]*points[i][1] - points[i][1]*points[j][0] - points[j][1]*points[k][0] - points[k][1]*points[i][0]) / 2);
                if (curr > max) {
                    max = curr;
                }
            }
        }
    }
    return max;
};