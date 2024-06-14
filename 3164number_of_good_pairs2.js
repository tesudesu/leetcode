// https://leetcode.com/problems/find-the-number-of-good-pairs-ii/

var numberOfPairs = function(nums1, nums2, k) {
    const map = new Map();

    for (let i = 0; i < nums2.length; i++) {
        const num = nums2[i] * k;
        map.set(num, (map.get(num) + 1) || 1);
    }

    let tot = 0;

    for (let i = 0; i < nums1.length; i++) {
        const end = Math.floor(Math.sqrt(nums1[i]));
        for (let j = 1; j <= end; j++) {
            const isFactor = nums1[i] % j;
            if (isFactor === 0) {
                const otherFactor = nums1[i] / j;
                if (map.has(j)) {
                    tot += map.get(j);
                }
                if (j !== otherFactor && map.has(nums1[i] / j)) {
                    tot += map.get(otherFactor);
                }
            }
        }
    }

    return tot;
};