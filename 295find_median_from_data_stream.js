// https://leetcode.com/problems/find-median-from-data-stream/

var MedianFinder = function() {
    this.minQueue = new MinPriorityQueue();
    this.maxQueue = new MaxPriorityQueue();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (num >= this.minQueue.front()) {
        this.minQueue.enqueue(num);
    } else {
        this.maxQueue.enqueue(num);
    }
    while (this.maxQueue.size() - this.minQueue.size() >= 2) {
        let temp = this.maxQueue.dequeue();
        this.minQueue.enqueue(temp);
    }
    while (this.minQueue.size() - this.maxQueue.size() >= 2) {
        let temp = this.minQueue.dequeue();
        this.maxQueue.enqueue(temp);
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.minQueue.size() > this.maxQueue.size()) {
        return this.minQueue.front();
    } else if (this.minQueue.size() < this.maxQueue.size()) {
        return this.maxQueue.front();
    } else {
        return (this.minQueue.front() + this.maxQueue.front()) / 2;
    }
};