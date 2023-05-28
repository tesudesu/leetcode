// https://leetcode.com/problems/array-prototype-last/

Array.prototype.last = function() {
    if (this.length) {
        return this[this.length-1];
    } else {
        return -1;
    }
};

// Array.prototype.last = function(arr) {
//     if (this[this.length-1] !== undefined) {
//         return this[this.length-1];
//     } else {
//         return -1;
//     }
// };

// Array.prototype.last = function() {
//     return this.length ? this.pop() : -1;
// };