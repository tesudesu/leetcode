// https://leetcode.com/problems/pass-the-pillow/

var passThePillow = function(n, time) {
    let direction = -1;
    let ind = 1;
    for (let i = 1; i <= time; i++) {
        if (ind === n || ind === 1) {
            direction *= -1;
        }
        if (direction > 0) {
            ind++;
        } else {
            ind--;
        }
    }
    return ind;
};