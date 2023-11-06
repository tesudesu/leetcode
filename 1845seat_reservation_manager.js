// https://leetcode.com/problems/seat-reservation-manager/

const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number} n
 */
var SeatManager = function(n) {
    this.unreserved = new MinPriorityQueue();
    this.curr = 1;
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function() {
    if (this.unreserved.size() > 0) {
        return this.unreserved.dequeue();
    }
    return this.curr++;
};

/** 
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function(seatNumber) {
    this.unreserved.enqueue(seatNumber);
};