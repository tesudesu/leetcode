// https://leetcode.com/problems/find-the-number-of-ways-to-place-people-i/

var numberOfPairs = function(points) {
    let tot = 0;

    for (let i = 0; i < points.length; i++) {
        for (let j = 0; j < points.length; j++) {
            if (i === j) continue;
            const [cx, cy] = points[i];
            const [tx, ty] = points[j];
            if (cx > tx || cy < ty) continue;

            let found = true;
            for (let k = 0; k < points.length; k++) {
                if (k === i || k === j) continue;
                const [ox, oy] = points[k];
                if (ox >= Math.min(cx, tx) && ox <= Math.max(cx, tx) && oy >= Math.min(cy, ty) && oy <= Math.max(cy, ty)) {
                    found = false;
                    break;
                }
            }
            if (found) {
                tot++;
            }
        }
    }

    return tot;
};