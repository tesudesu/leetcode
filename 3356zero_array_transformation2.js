// https://leetcode.com/problems/zero-array-transformation-ii/

var minZeroArray = function(nums, queries) {
    const canZero = (arr) => {
        if (nums[0] + arr[0] > 0) {
            return false;
        }

        for (let i = 1; i < nums.length; i++) {
            arr[i] = arr[i - 1] + arr[i];
            if (nums[i] + arr[i] > 0) {
                return false;
            }
        }

        return true;
    }

    let diff = Array(nums.length + 1).fill(0);
    
    if (canZero(diff)) {
        return 0;
    }

    let start = 0;
    let end = queries.length - 1;

    let res = -1;

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);
        diff = Array(nums.length + 1).fill(0);

        for (let i = 0; i <= mid; i++) {
            diff[queries[i][0]] -= queries[i][2];
            diff[queries[i][1] + 1] += queries[i][2];
        }

        if (canZero(diff)) {
            res = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return res === -1 ? res : res + 1;
};