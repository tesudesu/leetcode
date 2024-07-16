// https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/

var minDays = function(bloomDay, m, k) {
    if (m * k > bloomDay.length) {
        return -1;
    }

    let days = new Set(bloomDay);
    days = [...days];
    days.sort((a, b) => a - b);

    let start = 0;
    let end = days.length - 1;
    let res = days[end];

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);
        const day = days[mid];

        let bouquets = 0;
        let flowers = 0;
        let possible = false;

        for (let i = 0; i < bloomDay.length; i++) {
            if (bloomDay[i] <= day) {
                flowers++;
            } else {
                flowers = 0;
            }
            if (flowers === k) {
                bouquets++;
                flowers = 0;
            }
            if (bouquets === m) {
                possible = true;
                break;
            }
        }
        
        if (possible) {
            res = day;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return res;
};