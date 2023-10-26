// https://leetcode.com/problems/meeting-rooms-ii/

const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

var minMeetingRooms = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    let rooms = 0;

    const minQueue = new MinPriorityQueue();

    for (let i = 0; i < intervals.length; i++) {
        if (minQueue.size() > 0 && minQueue.front() <= intervals[i][0]) {
            minQueue.dequeue();
        } else {
            rooms++;
        }

        minQueue.enqueue(intervals[i][1]);
    }

    return rooms;
};