// https://leetcode.com/problems/earliest-second-to-mark-indices-i/

var earliestSecondToMarkIndices = function(nums, changeIndices) {
    let tot = nums.length;
    for (let i = 0; i < nums.length; i++) {
        tot += nums[i];
    }
    
    let start = tot - 1;
    let end = changeIndices.length - 1;
    let res = -1;

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);

        const last = new Map();

        for (let i = mid; i >= 0; i--) {
            if (!last.has(changeIndices[i])) {
                last.set(changeIndices[i], i);
            }
            if (last.size === nums.length) {
                break;
            }
        }

        let markedTot = 0;
        let markedIndices = 0;
        let ok = true;

        for (let i = 0; i <= mid; i++) {
            if (last.get(changeIndices[i]) === i) {
                markedTot += nums[changeIndices[i] - 1];
                markedIndices++;
                if (markedTot + markedIndices > i + 1) {
                    ok = false;
                    break;
                }
            }
        }

        if (ok && markedIndices === nums.length) {
            res = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return res === -1 ? -1 : res + 1;  
};