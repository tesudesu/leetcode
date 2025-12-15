// https://leetcode.com/problems/valid-triangle-number/

var triangleNumber = function(nums) {
    if (nums.length < 3) return 0

    nums.sort((a, b) => a - b);

    let tot = 0;

    for (let i = nums.length - 1; i >= 0; i--) {
        let start = 0;
        let end = i - 1;

        while (start < end) {
            if (nums[start] + nums[end] <= nums[i]) {
                start++;
            } else {
                tot += end - start;
                end--;
            }
        }
    }

    return tot;
};