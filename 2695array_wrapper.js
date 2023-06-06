// https://leetcode.com/problems/array-wrapper/

class ArrayWrapper {
    constructor(nums) {
        this.nums = nums;
    }

    valueOf() {
        let tot = 0;
        for (let i = 0; i < this.nums.length; i++) {
            tot += this.nums[i];
        }
        return tot;
    }

    toString() {
        return "[" + String(this.nums) + "]";
    }
}

// var ArrayWrapper = function(nums) {
//     this.nums = nums;
// };

// ArrayWrapper.prototype.valueOf = function() {
    // let tot = 0;
    // for (let i = 0; i < this.nums.length; i++) {
    //     tot += this.nums[i];
    // }
    // return tot;
// }

// ArrayWrapper.prototype.toString = function() {
//     return "[" + String(this.nums) + "]";
// }