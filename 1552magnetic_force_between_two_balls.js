// https://leetcode.com/problems/magnetic-force-between-two-balls/

var maxDistance = function(position, m) {
    position.sort((a, b) => a - b);

    let start = 1;
    let end = position[position.length - 1] - position[0];

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);
        let possible = false;
        let balls = 1;
        let last = 0;

        for (let i = 1; i < position.length; i++) {
            if (position[i] - position[last] >= mid) {
                balls++;
                last = i;
            }
            if (balls === m) {
                possible = true;
                break;
            }
        }

        if (possible) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return end;
};