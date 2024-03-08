// https://leetcode.com/problems/find-the-largest-area-of-square-inside-two-rectangles/

var largestSquareArea = function(bottomLeft, topRight) {
    const n = bottomLeft.length;
    let maxSquare = 0;

    for (let i = 0; i < n; i++) {
        const [ax1, ay1] = bottomLeft[i];
        const [ax2, ay2] = topRight[i];
        for (let j = i + 1; j < n; j++) {
            const [bx1, by1] = bottomLeft[j];
            const [bx2, by2] = topRight[j];

            const cx = Math.min(ax2, bx2) - Math.max(ax1, bx1);
            const cy = Math.min(ay2, by2) - Math.max(ay1, by1);

            const side = Math.min(cx, cy);
            if (side > 0) {
                maxSquare = Math.max(maxSquare, side * side);
            }
        }
    }

    return maxSquare;
};


var largestSquareArea = function(bottomLeft, topRight) {
    const n = bottomLeft.length;
    let maxSquare = 0;

    for (let i = 0; i < n; i++) {
        const [ax1, ay1] = bottomLeft[i];
        const [ax2, ay2] = topRight[i];
        for (let j = i + 1; j < n; j++) {
            const [bx1, by1] = bottomLeft[j];
            const [bx2, by2] = topRight[j];

            if ((bx1 <= ax2 && bx2 >= ax2) && (by2 >= ay1 && by1 <= ay2)) {
                const cx = Math.abs(Math.max(ax1, bx1) - Math.min(ax2, bx2));
                const cy = Math.abs(Math.max(ay1, by1) - Math.min(ay2, by2));
                const side = Math.min(cx, cy);
                maxSquare = Math.max(maxSquare, side * side);
            } else if ((ax1 <= bx2 && ax2 >= bx2) && (ay2 >= by1 && ay1 <= by2)) {
                const cx = Math.abs(Math.max(ax1, bx1) - Math.min(ax2, bx2));
                const cy = Math.abs(Math.max(ay1, by1) - Math.min(ay2, by2));
                const side = Math.min(cx, cy);
                maxSquare = Math.max(maxSquare, side * side);
            } 
        }
    }

    return maxSquare;
};