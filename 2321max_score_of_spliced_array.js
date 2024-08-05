// https://leetcode.com/problems/maximum-score-of-spliced-array/

var maximumsSplicedArray = function(nums1, nums2) {
    const n = nums1.length;

    const helper = (base, take) => {
        const diff = Array(n).fill();
        let baseSum = 0;
        for (let i = 0; i < n; i++) {
            diff[i] = take[i] - base[i];
            baseSum += base[i];
        }
        let max = 0;
        let currSum = 0;
        for (let i = 0; i < n; i++) {
            currSum += diff[i];
            if (currSum < 0) {
                currSum = 0;
            }
            max = Math.max(max, currSum);
        }
        return baseSum + max;
    }

    return Math.max(helper(nums1, nums2), helper(nums2, nums1));
};