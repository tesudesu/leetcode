// https://leetcode.com/problems/count-of-smaller-numbers-after-self/

class FenwickTree { 
    constructor(n) {
        this.bit = Array(n + 1).fill(0);
        this.n = n + 1;
    }

    // point update
    update(val, id) {
        while (id <= this.n) {
            this.bit[id] += val;
            id += (id & -id);
        }
    }

    // range query 1 to id
    query(id) {
        let ans = 0;
        while (id > 0) {
            ans += this.bit[id];
            id -= (id & -id);
        }
        return ans;
    }
}

var countSmaller = function(nums) {
    let combined = nums.map((e, i) => [e, i]);
    combined.sort((a, b) => a[0] - b[0]);
    let ans = Array(nums.length).fill();

    let tree = new FenwickTree(nums.length);

    for (const [val, id] of combined) {
        tree.update(1, id + 1);
        ans[id] = tree.query(nums.length) - tree.query(id + 1);
    }

    return ans;
};