// https://leetcode.com/problems/peak-index-in-a-mountain-array/

var peakIndexInMountainArray = function(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        const mid = Math.floor((end - start) / 2) + start;

        if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
            return mid;
        }

        if (arr[mid] > arr[mid - 1]) {
            start = start + 1;
        }

        if (arr[mid] < arr[mid - 1]) {
            end = end - 1;
        }
    }
};