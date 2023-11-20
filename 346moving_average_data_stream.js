// https://leetcode.com/problems/moving-average-from-data-stream/

const Queue = require('@datastructures-js/queue');

var MovingAverage = function(size) {
    this.window = size;
    this.nums = new Queue();
    this.tot = 0;
};

MovingAverage.prototype.next = function(val) {
    this.nums.enqueue(val);
    this.tot += val;
    if (this.nums.size() > this.window) {
        const first = this.nums.dequeue();
        this.tot -= first;
    }
    return this.tot / this.nums.size();
};