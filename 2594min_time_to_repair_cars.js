// https://leetcode.com/problems/minimum-time-to-repair-cars/

var repairCars = function(ranks, cars) {
    let start = 1;
    let end = cars * cars * Math.max(...ranks);
    let ans = end;

    const isPossible = (minutes) => {
        let carsRemaining = cars;
        for (let i = 0; i < ranks.length; i++) {
            carsRemaining -= Math.floor(Math.sqrt(Math.floor(minutes / ranks[i])));
        }
        if (carsRemaining > 0) {
            return false;
        } else {
            return true;
        }
    }

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);

        if (isPossible(mid)) {
            end = mid - 1;
            ans = mid;
        } else {
            start = mid + 1;
        }
    }

    return ans;
};