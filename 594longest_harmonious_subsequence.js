// https://leetcode.com/problems/longest-harmonious-subsequence/

var findLHS = function(nums) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!map.get(nums[i])) {
            map.set(nums[i], 1);
        } else {
            map.set(nums[i], map.get(nums[i])+1);
        }
    }
    let order = [...map.keys()].sort((a,b) => a-b);
    let lengths = [];
    for (let i = 0; i < order.length-1; i++) {
        let currLength = 0;
        if (order[i+1] == order[i]+1) {
            currLength += map.get(order[i]) + map.get(order[i+1]);
            lengths.push(currLength);
        }
    }
    return lengths.length == 0 ? 0 : Math.max(...lengths);
};