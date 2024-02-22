// https://leetcode.com/problems/meeting-rooms-iii/

const { PriorityQueue, MinPriorityQueue } = require('@datastructures-js/priority-queue');

var mostBooked = function(n, meetings) {
    meetings.sort((a, b) => a[0] - b[0]);

    const roomsAvailable = new MinPriorityQueue();
    for (let i = 0; i < n; i++) {
        roomsAvailable.enqueue(i);
    }

    const used = Array(n).fill(0);

    const busy = new PriorityQueue((a, b) => {
        if (a[1] < b[1]) {
            return -1;
        } else if (a[1] > b[1]) {
            return 1;
        } else {
            return a[0] < b[0] ? -1 : 1;
        }
    });

    for (let i = 0; i < meetings.length; i++) {
        const [start, end] = meetings[i];

        while (busy.size() > 0 && busy.front()[1] <= start) {
            const [room, end] = busy.dequeue();
            roomsAvailable.enqueue(room);
        }

        if (roomsAvailable.size() > 0) {
            const room = roomsAvailable.dequeue();
            busy.enqueue([room, end]);
            used[room]++;
        } else {
            const [room, prevEnd] = busy.dequeue();
            busy.enqueue([room, prevEnd + end - start]);
            used[room]++;
        }
    }

    let max = -Infinity;
    let maxInd;

    for (let i = 0; i < used.length; i++) {
        if (used[i] > max) {
            max = used[i];
            maxInd = i;
        }
    }

    return maxInd;
};