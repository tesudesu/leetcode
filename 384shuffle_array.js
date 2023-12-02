// https://leetcode.com/problems/shuffle-an-array/

// Fisher-Yates, O(n) time

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums;
    this.rand = [...nums];
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    for (let i = 0; i < this.rand.length - 1; i++) {
        let randInd = Math.floor(Math.random() * (this.rand.length - i));
        const temp = this.rand[i];
        this.rand[i] = this.rand[randInd + i];
        this.rand[randInd + i] = temp;
    }

    return this.rand;
};


// Brute force, O(n^2) time

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let dup = [...this.nums];
    let ans = Array(dup.length).fill();

    for (let i = 0; i < ans.length; i++) {
        let randInd = Math.floor(Math.random() * dup.length);
        ans[i] = dup[randInd];
        dup.splice(randInd, 1);
    }

    return ans;
};