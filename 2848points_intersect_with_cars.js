// https://leetcode.com/problems/points-that-intersect-with-cars/

var numberOfPoints = function(nums) {
    nums.sort((a, b) => a[0] - b[0]);

    let tot = 0;
    let last = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i][0] > last) {
            tot += nums[i][1] - nums[i][0] + 1;
            last = nums[i][1];
        } else {
            let diff = nums[i][1] - last;
            if (diff > 0) {
                tot += diff;
                last = nums[i][1];
            }
        }
    }

    return tot;
};