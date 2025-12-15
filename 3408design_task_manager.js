// https://leetcode.com/problems/design-task-manager/

/**
 * @param {number[][]} tasks
 */
var TaskManager = function(tasks) {
    this.maxQueue = new PriorityQueue((a, b) => {
        if (a[0] < b[0]) {
            return 1;
        } else if (a[0] > b[0]) {
            return -1;
        } else {
            return a[1] < b[1] ? 1 : -1;
        }
    });

    this.tasks = new Map();

    for (const [userID, taskID, priority] of tasks) {
        this.maxQueue.enqueue([priority, taskID, userID]);
        this.tasks.set(taskID, {p: priority, u: userID});
    }
    
};

/** 
 * @param {number} userId 
 * @param {number} taskId 
 * @param {number} priority
 * @return {void}
 */
TaskManager.prototype.add = function(userId, taskId, priority) {
    this.maxQueue.enqueue([priority, taskId, userId]);
    this.tasks.set(taskId, {p: priority, u: userId});
};

/** 
 * @param {number} taskId 
 * @param {number} newPriority
 * @return {void}
 */
TaskManager.prototype.edit = function(taskId, newPriority) {
    const task = this.tasks.get(taskId);
    task.p = newPriority;
    this.maxQueue.enqueue([newPriority, taskId, task.u]);
};

/** 
 * @param {number} taskId
 * @return {void}
 */
TaskManager.prototype.rmv = function(taskId) {
    this.tasks.delete(taskId);
};

/**
 * @return {number}
 */
TaskManager.prototype.execTop = function() {
    while (!this.maxQueue.isEmpty() && 
    (!this.tasks.has(this.maxQueue.front()[1]) || 
    this.tasks.get(this.maxQueue.front()[1]).p !== this.maxQueue.front()[0] || 
    this.tasks.get(this.maxQueue.front()[1]).u !== this.maxQueue.front()[2])) {
        this.maxQueue.dequeue();
    }

    if (this.maxQueue.isEmpty()) {
        return -1;
    } else {
        const [priority, task, user] = this.maxQueue.dequeue();
        this.tasks.delete(task);
        return user;
    }
};
