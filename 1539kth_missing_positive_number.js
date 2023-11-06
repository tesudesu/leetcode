// https://leetcode.com/problems/kth-missing-positive-number/

// O(n) time

var findKthPositive = function (arr, k) {
    let missing = 0;
    let j = 1;
    let i = 0;

    while (i < arr.length) {
        if (j < arr[i]) {
            missing++;
            if (missing === k) return j;
        } else if (j === arr[i]) {
            i++;
        }
        j++;
    }
    
    return k - 1 - missing + j;
};


// O(logn) time

var findKthPositive = function (arr, k) {
    let start = 0;
    let end = arr.length - 1;

    while (end - start > 1) {
        const mid = Math.floor((end - start) / 2) + start;

        if (arr[mid] - (mid + 1) < k) {
            start = mid;
        } else {
            end = mid;
        }
    }

    if (start === 0 && k <= arr[start] - (start + 1)) {
        return k;
    } else if (end === arr.length - 1 && k > arr[end] - (end + 1)) {
        return k + end + 1;
    } else {
        return k + start + 1;
    }
};