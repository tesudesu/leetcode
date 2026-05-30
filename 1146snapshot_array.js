// https://leetcode.com/problems/snapshot-array/

/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
    this.snapshots = Array(length).fill().map(() => Array().fill());

    for (let i = 0; i < this.snapshots.length; i++) {
        this.snapshots[i].push([0, 0]);
    }

    this.time = 0;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    let snaps = this.snapshots[index];

    if (this.time === snaps[snaps.length - 1][0]) {
        snaps[snaps.length - 1][1] = val;
    } else {
        snaps.push([this.time, val]);
    }
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    return this.time++;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    let snaps = this.snapshots[index];

    let start = 0;
    let end = snaps.length - 1;

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);
        if (snaps[mid][0] <= snap_id) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return snaps[end][1];
};