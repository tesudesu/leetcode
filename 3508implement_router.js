// https://leetcode.com/problems/implement-router/

/**
 * @param {number} memoryLimit
 */
var Router = function(memoryLimit) {
    this.limit = memoryLimit;
    this.queue = new Queue();
    this.set = new Set();
    this.destinations = new Map();
    this.removedTimes = new Map();
};

/** 
 * @param {number} source 
 * @param {number} destination 
 * @param {number} timestamp
 * @return {boolean}
 */
Router.prototype.addPacket = function(source, destination, timestamp) {
    let packet = `${source},${destination},${timestamp}`;
    if (this.set.has(packet)) return false;

    if (this.queue.size() === this.limit) {
        const [sourceDeleted, destinationDeleted, timestampDeleted] = this.queue.dequeue();

        let packet = `${sourceDeleted},${destinationDeleted},${timestampDeleted}`;

        this.set.delete(packet);
        
        if (this.removedTimes.has(destinationDeleted)) {
            let arr = this.removedTimes.get(destinationDeleted);
            arr.push(timestampDeleted);
            this.removedTimes.set(destinationDeleted, arr);
        } else {
            this.removedTimes.set(destinationDeleted, [timestampDeleted]);
        }
    }

    this.set.add(packet);

    this.queue.enqueue([source, destination, timestamp]);
    
    if (this.destinations.has(destination)) {
        let arr = this.destinations.get(destination);
        arr.push(timestamp);
        this.destinations.set(destination, arr);
    } else {
        this.destinations.set(destination, [timestamp]);
    }

    return true;
};

/**
 * @return {number[]}
 */
Router.prototype.forwardPacket = function() {
    if (this.queue.size() === 0) {
        return [];
    } 

    const [source, destination, timestamp] = this.queue.dequeue();

    let packet = `${source},${destination},${timestamp}`;

    this.set.delete(packet);
    if (this.removedTimes.has(destination)) {
        let arr = this.removedTimes.get(destination);
        arr.push(timestamp);
        this.removedTimes.set(destination, arr);
    } else {
        this.removedTimes.set(destination, [timestamp]);
    }

    return [source, destination, timestamp];
};

/** 
 * @param {number} destination 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {number}
 */
Router.prototype.getCount = function(destination, startTime, endTime) {
    if (!this.destinations.has(destination)) return 0;

    let times = this.destinations.get(destination);

    let lowerBoundTimes = lowerBound(times, startTime);
    let upperBoundTimes = upperBound(times, endTime);

    if (!this.removedTimes.has(destination)) {
        return upperBoundTimes - lowerBoundTimes;
    }

    let removed = this.removedTimes.get(destination);

    let lowerBoundRemoved = lowerBound(removed, startTime);
    let upperBoundRemoved = upperBound(removed, endTime);

    return (upperBoundTimes - lowerBoundTimes) - (upperBoundRemoved - lowerBoundRemoved);
};

const lowerBound = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);
        if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return end;
}

const upperBound = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);
        if (arr[mid] <= target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return end;
}