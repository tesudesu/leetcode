// https://leetcode.com/problems/number-of-recent-calls/

var RecentCounter = function() {
    this.requests = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.requests.push(t);
    for (let i = 0; i < this.requests.length; i++) {
        if (this.requests[i] >= t - 3000) {
            this.requests.splice(0, i);
            break;
        }
    }
    return this.requests.length;
};