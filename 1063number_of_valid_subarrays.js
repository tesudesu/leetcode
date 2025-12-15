// https://leetcode.com/problems/number-of-valid-subarrays/

var validSubarrays = function(nums) {
    let ans = 0;
    let stack = [];
    nums.push(-1);

    for (let i = 0; i < nums.length; i++) {
        while (stack.length > 0 && nums[i] < nums[stack[stack.length - 1]]) {
            let prevIndex = stack.pop();
            ans += i - prevIndex;
        }
        stack.push(i);
    }

    nums.pop();

    return ans;
};