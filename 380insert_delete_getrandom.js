// https://leetcode.com/problems/insert-delete-getrandom-o1/

var RandomizedSet = function() {
    this.arr = [];
    this.map = new Map();
};

RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) return false;
    this.arr.push(val);
    this.map.set(val, this.arr.length - 1);
    return true;
};

RandomizedSet.prototype.remove = function(val) {
    if (this.map.has(val)) {
        const ind = this.map.get(val);
        if (ind < this.arr.length - 1) {
            this.arr[ind] = this.arr[this.arr.length - 1];
            this.map.set(this.arr[ind], ind);
        }
        this.arr.pop();
        this.map.delete(val);
        return true;
    }
    return false;
};

RandomizedSet.prototype.getRandom = function() {
    const length = this.map.size;
    const random = Math.floor(Math.random() * length);
    return this.arr[random];
};

// var RandomizedSet = function() {
//     this.set = new Set();
// };

// RandomizedSet.prototype.insert = function(val) {
//     if (this.set.has(val)) return false;
//     this.set.add(val);
//     return true;
// };

// RandomizedSet.prototype.remove = function(val) {
//     if (this.set.has(val)) {
//         this.set.delete(val);
//         return true;
//     }
//     return false;
// };

// RandomizedSet.prototype.getRandom = function() {
//     const length = this.set.size;
//     const random = Math.floor(Math.random() * length);
//     return [...this.set][random];
// };