// https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/

var smallestChair = function(times, targetFriend) {
    const availablechairs = new MinPriorityQueue();
    const leavingtimes = new MinPriorityQueue({priority: a => a[0]});

    for (let i = 0; i < times.length; i++) {
        times[i].push(i);
        availablechairs.enqueue(i);
    }

    times.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < times.length; i++) {
        const [arrive, leave, friend] = times[i];

        while (leavingtimes.size() > 0 && arrive >= leavingtimes.front().element[0]) {
            const [leavingtime, emptiedchair] = leavingtimes.dequeue().element;
            availablechairs.enqueue(emptiedchair);
        }

        let currchair = availablechairs.dequeue().element;
        leavingtimes.enqueue([leave, currchair]);
        if (friend === targetFriend) {
            return currchair;
        }
    }
};