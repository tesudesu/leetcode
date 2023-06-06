// https://leetcode.com/problems/smallest-number-in-infinite-set/

const MinPriorityQueue = require('@datastructures-js/priority-queue');

var SmallestInfiniteSet = function() {
  this.reAdded = new Set();
  this.reAddedHeap = new MinPriorityQueue();
  this.current = 1;
};

SmallestInfiniteSet.prototype.popSmallest = function() {
  if (!this.reAddedHeap.isEmpty()) {
    lowest = this.reAddedHeap.dequeue().element;
    this.reAdded.delete(lowest);
    return lowest;
  } else {
    return this.current++;
  }
};

SmallestInfiniteSet.prototype.addBack = function(num) {
  if (!this.reAdded.has(num) && num < this.current) {
    this.reAdded.add(num);
    this.reAddedHeap.enqueue(num);
  }
};


// var SmallestInfiniteSet = function() {
//   this.notContains = new Set();
// };

// SmallestInfiniteSet.prototype.popSmallest = function() {
//   let n = 1;
//   while (this.notContains.has(n)) {
//       n++;
//   }
//   this.notContains.add(n);
//   return n;
// };

// SmallestInfiniteSet.prototype.addBack = function(num) {
//   if (this.notContains.has(num)) {
//       this.notContains.delete(num);
//   }
// };