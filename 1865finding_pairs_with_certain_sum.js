// https://leetcode.com/problems/finding-pairs-with-a-certain-sum/

var FindSumPairs = function(nums1, nums2) {
    this.count1 = new Map();
    this.count2 = new Map();
    this.nums2 = nums2;

    for (const num of nums1) {
        this.count1.set(num, (this.count1.get(num) + 1) || 1);
    }

    for (const num of nums2) {
        this.count2.set(num, (this.count2.get(num) + 1) || 1);
    }
};


FindSumPairs.prototype.add = function(index, val) {
    let oldVal = this.nums2[index];
    let newVal = this.nums2[index] + val;
    this.count2.set(oldVal, this.count2.get(oldVal) - 1);
    if (this.count2.get(oldVal) === 0) {
        this.count2.delete(oldVal);
    }
    this.nums2[index] = newVal;
    this.count2.set(newVal, (this.count2.get(newVal) + 1) || 1);
};


FindSumPairs.prototype.count = function(tot) {
    let ans = 0;
    for (const [num, count] of this.count1) {
        let need = tot - num;
        if (this.count2.has(need)) {
            ans += this.count2.get(need) * count;
        }
    }
    return ans;
};