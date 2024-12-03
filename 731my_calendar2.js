// https://leetcode.com/problems/my-calendar-ii/

var MyCalendarTwo = function() {
    this.single = [];
    this.double = [];
};


MyCalendarTwo.prototype.book = function(startTime, endTime) {
    for (const [start, end] of this.double) {
        if (startTime < end && endTime > start) {
            return false;
        }
    }

    for (let [start, end] of this.single) {
        if (startTime < end && endTime > start) {
            this.double.push([Math.max(start, startTime), Math.min(end, endTime)]);
        }
    }

    this.single.push([startTime, endTime]);

    return true;
};