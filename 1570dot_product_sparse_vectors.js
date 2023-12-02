// https://leetcode.com/problems/dot-product-of-two-sparse-vectors/

// Hash map

/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function(nums) {
    this.map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            this.map.set(i, nums[i]);
        }
    }
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
    let res = 0;

    for (const [i, v1] of this.map) {
        res += v1 * (vec.map.get(i) || 0);
    }

    return res;
};



// Put values in another array and 2-pointers

/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function(nums) {
    this.sparse = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            this.sparse.push([i, nums[i]]);
        }
    }
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
    let res = 0;

    let i = 0;
    let j = 0;

    while (i < this.sparse.length && j < vec.sparse.length) {
        if (this.sparse[i][0] === vec.sparse[j][0]) {
            res += this.sparse[i][1] * vec.sparse[j][1];
            i++;
            j++;
        } else if (this.sparse[i][0] > vec.sparse[j][0]) {
            j++;
        } else {
            i++;
        }
    }

    return res;
};