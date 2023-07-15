// https://leetcode.com/problems/min-stack/

var MinStack = function() {
    this.stack = [];
    this.mins = [];
};

MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if (this.mins.length === 0 || val <= this.mins[this.mins.length - 1]) {
        this.mins.push(val);
    }
};

MinStack.prototype.pop = function() {
    const popped = this.stack.pop();
    if (this.mins[this.mins.length - 1] === popped) {
        this.mins.pop();
    }
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
    return this.mins[this.mins.length - 1];
};


// const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

// var MinStack = function() {
//     this.stack = [];
//     this.minQueue = new MinPriorityQueue();
//     this.map = new Map();
// };

// MinStack.prototype.push = function(val) {
//     this.stack.push(val);
//     if (this.map.has(val)) {
//         this.map.set(val, this.map.get(val) + 1);
//     } else {
//         this.map.set(val, 1);
//     }
//     this.minQueue.enqueue(val);
// };

// MinStack.prototype.pop = function() {
//     const deleted = this.stack.pop();
//     this.map.set(deleted, this.map.get(deleted) - 1);
//     if (this.map.get(deleted) === 0) {
//         this.map.delete(deleted);
//     }
// };

// MinStack.prototype.top = function() {
//     return this.stack[this.stack.length - 1];
// };

// MinStack.prototype.getMin = function() {
//     let min = this.minQueue.dequeue();
//     while (!this.map.has(min)) {
//         min = this.minQueue.dequeue();
//     }
//     this.minQueue.enqueue(min);
//     return min;
// };