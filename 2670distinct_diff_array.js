// https://leetcode.com/problems/find-the-distinct-difference-array/

var distinctDifferenceArray = function(nums) {
    let distinctLeft = new Set(nums).size;
    let distinctRight = new Set();
    let ans = [];
    ans.unshift(distinctLeft);
    for (let i = nums.length-2; i >= 0; i--) {
        const removed = nums.pop();
        if (!nums.includes(removed)) {
            distinctLeft--;
        }
        if (!distinctRight.has(removed)) {
            distinctRight.add(removed);
        }
        ans.unshift(distinctLeft - distinctRight.size);
    }
    return ans;
};