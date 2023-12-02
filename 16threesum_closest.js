// https://leetcode.com/problems/3sum-closest/

var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let ans;
    let dist = Infinity;

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            let currSum = nums[i] + nums[left] + nums[right];
            if (currSum === target) {
                return target;
            } else if (currSum > target) {
                right--;
            } else {
                left++;
            }
            if (Math.abs(currSum - target) < dist) {
                ans = currSum;
                dist = Math.abs(currSum - target);
            }
        }
    }

    return ans;
};