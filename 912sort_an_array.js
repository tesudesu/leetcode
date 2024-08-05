// https://leetcode.com/problems/sort-an-array/

var sortArray = function(nums) {
    const temp = Array(nums.length).fill();

    const merge = (left, mid, right) => {
        for (let i = left; i <= mid; i++) {
            temp[i] = nums[i];
        }

        for (let i = mid + 1; i <= right; i++) {
            temp[i] = nums[i];
        }

        let i = left;
        let j = left;
        let k = mid + 1;

        while (j <= mid && k <= right) {
            if (temp[j] <= temp[k]) {
                nums[i] = temp[j];
                j++;
            } else {
                nums[i] = temp[k];
                k++;
            }
            i++;
        }

        while (j <= mid) {
            nums[i] = temp[j];
            j++;
            i++;
        }

        while (k <= right) {
            nums[i] = temp[k];
            k++;
            i++;
        }
    }

    const mergeSort = (left, right) => {
        if (left >= right) {
            return;
        }
        const mid = Math.floor((right - left) / 2) + left;
        mergeSort(left, mid);
        mergeSort(mid + 1, right);
        merge(left, mid, right);
    }

    mergeSort(0, nums.length - 1);
    return nums;
};