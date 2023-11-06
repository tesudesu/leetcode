// https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/

var sumCounts = function(nums) {
    let ans = 0;

    for (let i = 0; i < nums.length; i++) {
        let set = new Set();
        for (let j = i; j < nums.length; j++) {
            set.add(nums[j]);
            ans += (set.size * set.size);
        }
    }

    return ans;
};