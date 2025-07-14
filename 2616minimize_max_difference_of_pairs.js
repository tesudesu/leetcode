// https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/

var minimizeMax = function(nums, p) {
    nums.sort((a, b) => a - b);

    let start = 0;
    let end = nums[nums.length - 1] - nums[0];
    let res = end;

    const isPossible = (num) => {
        let i = 1;
        let pairs = 0;

        while (i < nums.length) {
            if (nums[i] - nums[i - 1] <= num) {
                pairs++;
                i += 2;
            } else {
                i++;
            }
            if (pairs >= p) return true;
        }
        return false;
    }

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);

        if (isPossible(mid)) {
            res = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return res;
};