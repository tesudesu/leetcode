// https://leetcode.com/problems/check-if-it-is-a-straight-line/

var checkStraightLine = function(coordinates) {
    let firstX = coordinates[0][0];
    let sameX = true;
    
    for (let i = 1; i < coordinates.length; i++) {
        if (coordinates[i][0] !== firstX) {
            sameX = false;
            break;
        }
    }

    if (sameX) return true;

    let firstSlope = (coordinates[1][1] - coordinates[0][1])/(coordinates[1][0] - coordinates[0][0]);

    for (let i = 2; i < coordinates.length; i++) {
        let slope = (coordinates[i][1] - coordinates[i-1][1])/(coordinates[i][0] - coordinates[i-1][0]);
        if (slope !== firstSlope) return false;
    }
    return true;
};