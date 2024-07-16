// https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/

var nodesBetweenCriticalPoints = function(head) {
    let criticalPoints = [];

    let prevVal = head.val;

    head = head.next;

    let ind = 1;

    while (head && head.next) {
        if (head.val > prevVal && head.val > head.next.val) {
            criticalPoints.push(ind);
        } else if (head.val < prevVal && head.val < head.next.val) {
            criticalPoints.push(ind);
        }
        prevVal = head.val;
        ind++;
        head = head.next;
    }

    if (criticalPoints.length < 2) {
        return [-1, -1];
    }

    let ans = Array(2).fill(Infinity);

    ans[1] = criticalPoints[criticalPoints.length - 1] - criticalPoints[0];

    for (let i = 1; i < criticalPoints.length; i++) {
        ans[0] = Math.min(criticalPoints[i] - criticalPoints[i - 1], ans[0]);
    }

    return ans;
};