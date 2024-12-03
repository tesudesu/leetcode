// https://leetcode.com/problems/my-calendar-i/

var MyCalendar = function() {
    this.arr = [];
};


MyCalendar.prototype.book = function(startTime, endTime) {
    for (const [start, end] of this.arr) {
        if (startTime < end && endTime > start) {
            return false;
        }
    }

    this.arr.push([startTime, endTime]);

    return true;
};