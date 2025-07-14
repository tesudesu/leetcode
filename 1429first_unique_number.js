// https://leetcode.com/problems/first-unique-number/

var FirstUnique = function(nums) {
    this.count = new Map();
    this.currIndex = 0;
    this.arr = nums;
    for (let i = 0; i < nums.length; i++) {
        this.count.set(nums[i], (this.count.get(nums[i]) + 1) || 1);
    }
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
    while (this.currIndex < this.arr.length && this.count.get(this.arr[this.currIndex]) !== 1) {
        this.currIndex++;
    }
    return this.currIndex === this.arr.length ? -1 : this.arr[this.currIndex];
};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
    this.count.set(value, (this.count.get(value) + 1) || 1);
    this.arr.push(value);
};