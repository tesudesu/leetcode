// https://leetcode.com/problems/reschedule-meetings-for-maximum-free-time-i/

var maxFreeTime = function(eventTime, k, startTime, endTime) {
    let max = 0;

    let left = 0;
    let curr = startTime[0];

    for (let i = 0; i < startTime.length; i++) {
        while (i - left + 1 > k) {
            if (left === 0) {
                curr -= startTime[left];
            } else {
                curr -= (startTime[left] - endTime[left - 1]);
            }
            left++;
        }

        if (i === startTime.length - 1) {
            curr += eventTime - endTime[i];
        } else {
            curr += startTime[i + 1] - endTime[i];
        }
        
        max = Math.max(max, curr);
    }

    return max;
};