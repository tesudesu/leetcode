// https://leetcode.com/problems/design-a-number-container-system/

var NumberContainers = function() {
    this.map = new Map();
    this.minIndex = new Map();
};

/** 
 * @param {number} index 
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function(index, number) {
    this.map.set(index, number);
    if (!this.minIndex.has(number)) {
        const minQueue = new MinPriorityQueue();
        minQueue.enqueue(index);
        this.minIndex.set(number, minQueue);
    } else {
        const minQueue = this.minIndex.get(number);
        minQueue.enqueue(index);
    }
};

/** 
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function(number) {
    if (!this.minIndex.has(number)) {
        return -1;
    }
    const minQueue = this.minIndex.get(number);
    while (minQueue.size() > 0 && this.map.get(minQueue.front().element) !== number) {
        minQueue.dequeue();
    }
    if (minQueue.size() > 0) {
        return minQueue.front().element;
    } else {
        return -1;
    }
};