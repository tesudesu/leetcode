// https://leetcode.com/problems/kth-largest-element-in-a-stream/

var KthLargest = function(k, nums) {
    this.minQueue = new MinPriorityQueue();
    this.k = k;
    for (let i = 0; i < nums.length; i++) {
        this.minQueue.enqueue(nums[i]);
        if (this.minQueue.size() > k) {
            this.minQueue.dequeue();
        }
    }
};

KthLargest.prototype.add = function(val) {
    this.minQueue.enqueue(val);
    if (this.minQueue.size() > this.k) {
        this.minQueue.dequeue();
    }
    return this.minQueue.front().element;
};