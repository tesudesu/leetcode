// https://leetcode.com/problems/reschedule-meetings-for-maximum-free-time-ii/

var maxFreeTime = function(eventTime, startTime, endTime) {
    let combined = []; 
    let gaps = [];

    for (let i = 0; i < startTime.length; i++) {
        let breakTime = startTime[i] - (i === 0 ? 0 : endTime[i - 1]);
        gaps.push(breakTime);
        combined.push(breakTime);
        combined.push(endTime[i] - startTime[i]);
    }

    gaps.push(eventTime - endTime[endTime.length - 1]);
    combined.push(eventTime - endTime[endTime.length - 1]);

    gaps.sort((a, b) => b - a);

    let max = 0;

    const canRemove = (break1, break2, event) => {
        let foundBreak1 = false;
        let foundBreak2 = false;

        for (let i = 0; i < gaps.length; i++) {
            if (gaps[i] < event) {
                return false;
            }
            if (gaps[i] === break1 && !foundBreak1) {
                foundBreak1 = true;
            } else if (gaps[i] === break2 && !foundBreak2) {
                foundBreak2 = true;
            } else if (gaps[i] >= event) {
                return true;
            }
        }
    }

    for (let i = 2; i < combined.length; i += 2) {
        let break1 = combined[i];
        let break2 = combined[i - 2];
        let event = combined[i - 1];
        if (canRemove(break1, break2, event)) {
            max = Math.max(max, break1 + break2 + event);
        } else {
            max = Math.max(max, break1 + break2);
        }
    }

    return max;
};