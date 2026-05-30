// https://leetcode.com/problems/meeting-scheduler/

var minAvailableDuration = function(slots1, slots2, duration) {
    let i = 0;
    let j = 0;
    slots1.sort((a, b) => a[0] - b[0]);
    slots2.sort((a, b) => a[0] - b[0]);

    while (i < slots1.length && j < slots2.length) {
        let [a, b] = slots1[i];
        let [x, y] = slots2[j];
        const start = Math.max(a, x);
        const end = Math.min(b, y);
        if (end - start >= duration) {
            return [start, start + duration];
        }
        if (b > y) {
            j++;
        } else {
            i++;
        }
    }

    return [];
};