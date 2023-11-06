// https://leetcode.com/problems/rectangle-area/

var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    const area1 = Math.abs(ax2 - ax1) * Math.abs(ay2 - ay1);
    const area2 = Math.abs(bx2 - bx1) * Math.abs(by2 - by1);

    if ((bx1 <= ax2 && bx2 >= ax2) && (by2 >= ay1 && by1 <= ay2)) {
        let cx = Math.abs(Math.max(ax1, bx1) - Math.min(ax2, bx2));
        let cy = Math.abs(Math.max(ay1, by1) - Math.min(ay2, by2));
        return area1 + area2 - (cx * cy);
    } else if ((ax1 <= bx2 && ax2 >= bx2) && (ay2 >= by1 && ay1 <= by2)) {
        let cx = Math.abs(Math.max(ax1, bx1) - Math.min(ax2, bx2));
        let cy = Math.abs(Math.max(ay1, by1) - Math.min(ay2, by2));
        return area1 + area2 - (cx * cy);
    } else {
        return area1 + area2;
    }
};