// https://leetcode.com/problems/reverse-pairs/

var reversePairs = function(nums) {
    let count = 0;

    const mergeSort = (start, end) => {
        if (start >= end) return;
        const mid = start + Math.floor((end - start) / 2);
        mergeSort(start, mid);
        mergeSort(mid + 1, end);
        countPairs(start, mid, end);
        merge(start, mid, end);
    }

    const countPairs = (start, mid, end) => {
        let j = mid + 1;

        for (let i = start; i <= mid; i++) {
            while (j <= end && nums[i] > 2 * nums[j]) {
                j++;
            }
            count += j - (mid + 1);
        }
    }

    const merge = (start, mid, end) => {
        const temp = [];
        let i = start;
        let j = mid + 1;

        while(i <= mid && j <= end) {
            if (nums[i] <= nums[j]) {
                temp.push(nums[i++]);
            } else {
                temp.push(nums[j++]);
            }
        }

        while (i <= mid) {
            temp.push(nums[i++]);
        }
        while (j <= end) {
            temp.push(nums[j++]);
        }

        for (let i = 0; i < temp.length; i++) {
            nums[start + i] = temp[i];
        }
    }

    mergeSort(0, nums.length - 1);

    return count;
};