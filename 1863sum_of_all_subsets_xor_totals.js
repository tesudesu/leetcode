// https://leetcode.com/problems/sum-of-all-subset-xor-totals/

var subsetXORSum = function(nums) {
    let sum = 0;

    const dfs = (i, tot) => {
        if (i === nums.length) {
            return;
        }

        for (let j = i; j < nums.length; j++) {
            sum += (tot ^ nums[j]);
            dfs(j + 1, tot ^ nums[j]);
        }
    }

    dfs(0, 0);

    return sum;
};


var subsetXORSum = function(nums) {
    const dfs = (i, tot) => {
        if (i === nums.length) {
            return tot;
        }

        return dfs(i + 1, tot ^ nums[i]) + dfs(i + 1, tot);
    }

    return dfs(0, 0);
};


var subsetXORSum = function(nums) {
    let findBitsSet = 0;

    for (let i = 0; i < nums.length; i++) {
        findBitsSet |= nums[i];
    }

    // return findBitsSet << (nums.length - 1);
    return findBitsSet * Math.pow(2, nums.length - 1);
};