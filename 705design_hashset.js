// https://leetcode.com/problems/design-hashset/

var MyHashSet = function() {
    this.set = [];
};

MyHashSet.prototype.add = function(key) {
    if (!this.set.includes(key)) {
        this.set.push(key);
    }
};

MyHashSet.prototype.remove = function(key) {
    const ind = this.set.indexOf(key);
    if (ind >= 0) {
        this.set.splice(ind, 1);
    }
};

MyHashSet.prototype.contains = function(key) {
    return this.set.includes(key);
};