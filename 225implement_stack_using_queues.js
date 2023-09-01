// https://leetcode.com/problems/implement-stack-using-queues/

const { Queue } = require('@datastructures-js/queue');

var MyStack = function() {
    this.queue1 = new Queue();
    this.queue2 = new Queue();
    this.takeFrom2 = false;
};

MyStack.prototype.push = function(x) {
    if (this.queue1.isEmpty()) {
        this.queue1.enqueue(x);
        this.takeFrom2 = false;
    } else if (this.queue2.isEmpty()) {
        this.queue2.enqueue(x);
        this.takeFrom2 = true;
    } else {
        this.queue1.enqueue(this.queue2.dequeue());
        this.queue2.enqueue(x);
    }
};

MyStack.prototype.pop = function() {
    let res;
    if (this.takeFrom2) {
        res = this.queue2.dequeue();
        while (this.queue1.size() > 1) {
            this.queue2.enqueue(this.queue1.dequeue());
        }
        this.takeFrom2 = false;
    } else {
        res = this.queue1.dequeue();
        while (this.queue2.size() > 1) {
            this.queue1.enqueue(this.queue2.dequeue());
        }
        this.takeFrom2 = true;
    }

    return res;
};

MyStack.prototype.top = function() {
    if (this.takeFrom2) {
        return this.queue2.front();
    } else {
        return this.queue1.front();
    }
};

MyStack.prototype.empty = function() {
    return this.queue1.isEmpty() && this.queue2.isEmpty();
};