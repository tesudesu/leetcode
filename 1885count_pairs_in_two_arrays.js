// https://leetcode.com/problems/count-pairs-in-two-arrays/

var countPairs = function(nums1, nums2) {
    const n = nums1.length;
    const diff = Array(n).fill();

    for (let i = 0; i < n; i++) {
        diff[i] = nums1[i] - nums2[i];
    }

    diff.sort((a, b) => a - b);
    
    let tot = 0;

    for (let i = 0; i < n; i++) {
        if (diff[i] > 0) {
            tot += n - i - 1;
            continue;
        }

        let left = i + 1;
        let right = n - 1;
        let res = -1;

        while (left <= right) {
            const mid = Math.floor((right - left) / 2) + left;
            if (diff[mid] + diff[i] > 0) {
                res = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        if (res !== -1) {
            tot += n - res;
        }
    }

    return tot;
};