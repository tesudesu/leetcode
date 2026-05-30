// https://leetcode.com/problems/heaters

var findRadius = function(houses, heaters) {
    let start = 0;
    let end = 1e9;
    let ans;
    heaters.sort((a, b) => a - b);
    houses.sort((a, b) => a - b);

    const isPossible = (radius) => {
        let j = 0;

        for (let i = 0; i < heaters.length; i++) {
            let min = heaters[i] - radius;
            let max = heaters[i] + radius;
            while (houses[j] >= min && houses[j] <= max) {
                j++;
            }
        }
        
        return j === houses.length;
    }

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);
        if (isPossible(mid)) {
            ans = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return ans;
};