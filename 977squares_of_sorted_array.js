// https://leetcode.com/problems/squares-of-a-sorted-array/

var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    const ans = Array(nums.length).fill();
    let i = ans.length - 1;

    while (left <= right) {
        const leftSquare = nums[left] * nums[left];
        const rightSquare = nums[right] * nums[right];
        if (leftSquare >= rightSquare) {
            ans[i] = leftSquare;
            left++;
        } else {
            ans[i] = rightSquare;
            right--;
        }
        i--;
    }

    return ans;
};