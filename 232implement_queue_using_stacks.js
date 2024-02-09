// https://leetcode.com/problems/implement-queue-using-stacks/

// Push: O(n) time; Pop: O(1) time

var MyQueue = function() {
    this.queue = [];
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    while (this.queue.length > 0) {
        this.stack.push(this.queue.pop());
    }
    this.queue.push(x);
    while (this.stack.length > 0) {
        this.queue.push(this.stack.pop());
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.queue.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.queue[this.queue.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.queue.length === 0;
};


// Push: O(1) time; Pop: Amortized O(1) time

var MyQueue = function() {
    this.queue = [];
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.queue.length === 0) {
        while (this.stack.length > 0) {
            this.queue.push(this.stack.pop());
        }
    }
    return this.queue.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.queue.length > 0) {
        return this.queue[this.queue.length - 1];
    } else {
        return this.stack[0];
    }
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.queue.length === 0 && this.stack.length === 0;
};