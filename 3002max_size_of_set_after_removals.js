// https://leetcode.com/problems/maximum-size-of-a-set-after-removals/

var maximumSetSize = function (nums1, nums2) {
    const toRemove1 = nums1.length / 2;
    const toRemove2 = nums2.length / 2;

    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    let removed1 = nums1.length - set1.size;
    let removed2 = nums2.length - set2.size;

    if (removed1 < toRemove1) {
        for (const num of set1) {
            if (set2.has(num)) {
                set1.delete(num);
                removed1++;
                if (removed1 === toRemove1) {
                    break;
                }
            }
        }
    }

    if (removed1 < toRemove1) {
        for (const num of set1) {
            set1.delete(num);
            removed1++;
            if (removed1 === toRemove1) {
                break;
            }
        }
    }

    if (removed2 < toRemove2) {
        for (const num of set2) {
            if (set1.has(num)) {
                set2.delete(num);
                removed2++;
                if (removed2 === toRemove2) {
                    break;
                }
            }
        }
    }

    if (removed2 < toRemove2) {
        for (const num of set2) {
            set2.delete(num);
            removed2++;
            if (removed2 === toRemove2) {
                break;
            }
        }
    }

    const combined = new Set([...set1, ...set2]);

    return combined.size;
};