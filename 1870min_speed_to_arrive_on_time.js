// https://leetcode.com/problems/minimum-speed-to-arrive-on-time/

var minSpeedOnTime = function(dist, hour) {
    if (hour <= dist.length - 1) return -1;

    let tot = 0;

    for (let i = 0; i < dist.length; i++) {
        tot += dist[i];
    }

    if (tot <= hour) return 1;

    let start = 2;
    let end = 10e7;
    let minHours;

    while (start <= end) {
        const mid = Math.floor((end - start) / 2) + start;

        let hours = 0;

        for (let i = 0; i < dist.length; i++) {
            if (i !== dist.length - 1) {
                hours += Math.ceil(dist[i] / mid);
            } else {
                hours += dist[i] / mid;
            }
        }

        if (hours <= hour) {
            minHours = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return minHours;
};