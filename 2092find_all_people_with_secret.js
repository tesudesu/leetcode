// https://leetcode.com/problems/find-all-people-with-secret/

var findAllPeople = function(n, meetings, firstPerson) {
    const map = new Map();

    for (const [a, b, t] of meetings) {
        if (!map.has(a)) {
            map.set(a, [[b, t]]);
        } else {
            let arr = map.get(a);
            arr.push([b, t]);
            map.set(a, arr);
        }
        if (!map.has(b)) {
            map.set(b, [[a, t]]);
        } else {
            let arr = map.get(b);
            arr.push([a, t]);
            map.set(b, arr);
        }
    }
    
    let stack = [];
    stack.push([0, 0]);
    stack.push([firstPerson, 0]);

    const earliest = Array(n).fill(Infinity);
    earliest[0] = 0;
    earliest[firstPerson] = 0;

    while (stack.length > 0) {
        const [person, time] = stack.pop();

        if (!map.has(person)) continue;
        const nextPeople = map.get(person);

        for (const [nextPerson, t] of nextPeople) {
            if (t >= time && earliest[nextPerson] > t) {
                earliest[nextPerson] = t;
                stack.push([nextPerson, t]);
            }
        }
    }

    let ans = [];
    for (let i = 0; i < earliest.length; i++) {
        if (earliest[i] !== Infinity) {
            ans.push(i);
        }
    }

    return ans;
};


// Min queue

var findAllPeople = function(n, meetings, firstPerson) {
    const map = new Map();

    for (const [a, b, t] of meetings) {
        if (!map.has(a)) {
            map.set(a, [[b, t]]);
        } else {
            let arr = map.get(a);
            arr.push([b, t]);
            map.set(a, arr);
        }
        if (!map.has(b)) {
            map.set(b, [[a, t]]);
        } else {
            let arr = map.get(b);
            arr.push([a, t]);
            map.set(b, arr);
        }
    }

    const minQueue = new MinPriorityQueue(a => a[1]);
    minQueue.enqueue([0, 0]);
    minQueue.enqueue([firstPerson, 0]);

    const earliest = Array(n).fill(Infinity);
    earliest[0] = 0;
    earliest[firstPerson] = 0;

    while (!minQueue.isEmpty()) {
        const [person, time] = minQueue.dequeue();

        if (!map.has(person)) continue;
        const nextPeople = map.get(person);

        for (const [nextPerson, t] of nextPeople) {
            if (t >= time && earliest[nextPerson] > t) {
                earliest[nextPerson] = t;
                minQueue.enqueue([nextPerson, t]);
            }
        }
    }

    let ans = [];
    for (let i = 0; i < earliest.length; i++) {
        if (earliest[i] !== Infinity) {
            ans.push(i);
        }
    }

    return ans;
};


var findAllPeople = function(n, meetings, firstPerson) {
    let knows = Array(n).fill(false);
    knows[0] = true;
    knows[firstPerson] = true;

    meetings.sort((a, b) => a[2] - b[2]);

    const sameTimeMeetings = new Map();

    for (const [a, b, t] of meetings) {
        if (!sameTimeMeetings.has(t)) {
            sameTimeMeetings.set(t, [[a, b]]);
        } else {
            let arr = sameTimeMeetings.get(t);
            arr.push([a, b]);
            sameTimeMeetings.set(t, arr);
        }
    }

    let times = [...sameTimeMeetings.keys()];
    times.sort((a, b) => a - b);

    for (const time of times) {
        const meets = new Map();
        const people = sameTimeMeetings.get(time);
        const peopleKnows = new Set();
        for (const [a, b] of people) {
            if (!meets.has(a)) {
                meets.set(a, [b]);
            } else {
                let arr = meets.get(a);
                arr.push(b);
                meets.set(a, arr);
            }
            if (!meets.has(b)) {
                meets.set(b, [a]);
            } else {
                let arr = meets.get(b);
                arr.push(a);
                meets.set(b, arr);
            }
            if (knows[a]) {
                peopleKnows.add(a);
            }
            if (knows[b]) {
                peopleKnows.add(b);
            }
        }

        let stack = []
        for (const person of peopleKnows) {
            stack.push(person);
        }
        while (stack.length > 0) {
            const curr = stack.pop();
            const talks = meets.get(curr);
            for (const nextPerson of talks) {
                if (!knows[nextPerson]) {
                    knows[nextPerson] = true;
                    stack.push(nextPerson);
                }
            }
        }
    }

    let ans = [];
    for (let i = 0; i < knows.length; i++) {
        if (knows[i]) {
            ans.push(i);
        }
    }

    return ans;
};