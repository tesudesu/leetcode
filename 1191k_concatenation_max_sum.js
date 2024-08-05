// https://leetcode.com/problems/k-concatenation-maximum-sum/

var kConcatenationMaxSum = function(arr, k) {
    // Max in single arr, not continuous

    let max1 = 0;
    let currSum = 0;
    const mod = 1e9 + 7;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        currSum += arr[i];
        if (currSum < 0) {
            currSum = 0;
        }
        max1 = Math.max(max1, currSum);
    }

    if (k < 2) {
        return max1 % mod;
    }

    // Max over two arrays

    let max2 = 0;
    currSum = 0;

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < arr.length; j++) {
            currSum += arr[j];
            if (currSum < 0) {
                currSum = 0;
            }
            max2 = Math.max(max2, currSum);
        }
    }

    // Sum of arr is positive, max over all arrays

    if (sum <= 0 || k <= 2) {
        return Math.max(max1, max2) % mod;
    }

    let max3 = (k - 2) * sum + max2;

    return max3 % mod;
};