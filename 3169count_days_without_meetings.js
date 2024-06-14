// https://leetcode.com/problems/count-days-without-meetings/

var countDays = function(days, meetings) {
    meetings.sort((a, b) => a[0] - b[0]);

    let tot = 0;
    if (meetings[0][0] !== 1 && days >= meetings[0][0]) {
        tot += (meetings[0][0] - 1);
    }

    let lastMeeting = meetings[0][1];

    for (let i = 1; i < meetings.length; i++) {
        const [a, b] = meetings[i];
        if (a > days) break;
        tot += Math.max(0, a - lastMeeting - 1);
        lastMeeting = Math.max(lastMeeting, b);
    }

    if (lastMeeting < days) {
        tot += (days - lastMeeting);
    }

    return tot;
};