// https://leetcode.com/problems/house-robber-iv/

var minCapability = function(nums, k) {
    let start = Math.min(...nums);
    let end = Math.max(...nums);

    let res = end;

    while (start <= end) {
        const mid = Math.floor((end - start) / 2) + start;

        let taken = 0;

        let i = 0;

        while (i < nums.length && taken < k) {
            if (nums[i] <= mid) {
                taken++;
                i += 2;
            } else {
                i++;
            }
        }

        if (taken === k) {     // is possible
            res = mid;
            end = mid - 1;
        } else {               // not possible
            start = mid + 1;
        }
    }

    return res;
};