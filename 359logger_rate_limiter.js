// https://leetcode.com/problems/logger-rate-limiter/

var Logger = function() {
    this.messages = new Map();
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if (this.messages.has(message) && this.messages.get(message) > timestamp) {
        return false;
    }

    this.messages.set(message, timestamp + 10);
    return true;
};