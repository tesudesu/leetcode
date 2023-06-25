// https://leetcode.com/problems/total-distance-traveled/

var distanceTraveled = function (mainTank, additionalTank) {
    let totLiters = 0;

    while (mainTank >= 5) {
        totLiters += 5;
        if (additionalTank >= 1) {
            mainTank -= 4;
            additionalTank--;
        } else {
            mainTank -= 5;
        }
    }

    return mainTank > 0 ? (totLiters + mainTank) * 10 : totLiters * 10;
};