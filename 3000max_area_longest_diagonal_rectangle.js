// https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/

var areaOfMaxDiagonal = function(dimensions) {
    let max = 0;
    let area = 0;

    for (let i = 0; i < dimensions.length; i++) {
        const diagonal = Math.sqrt(dimensions[i][0] * dimensions[i][0] + dimensions[i][1] * dimensions[i][1]);
        const currArea = dimensions[i][0] * dimensions[i][1];

        if (diagonal > max) {
            max = diagonal;
            area = currArea;
        } else if (diagonal === max) {
            area = Math.max(area, currArea);
        }
    }

    return area;
};