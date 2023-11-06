// https://leetcode.com/problems/random-pick-index/

var Solution = function(nums) {
    this.map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (this.map.has(nums[i])) {
            let arr = this.map.get(nums[i]);
            arr.push(i);
            this.map.set(nums[i], arr);
        } else {
            this.map.set(nums[i], [i]);
        }
    }
};


Solution.prototype.pick = function(target) {
    const arr = this.map.get(target);
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
};