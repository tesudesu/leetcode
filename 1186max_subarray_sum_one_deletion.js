// https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/

var maximumSum = function(arr) {
    let forwardMaxSum = Array(arr.length).fill();
    forwardMaxSum[0] = arr[0];
    let max = arr[0];

    for (let i = 1; i < forwardMaxSum.length; i++) {
        if (forwardMaxSum[i - 1] < 0) {
            forwardMaxSum[i] = arr[i];
        } else {
            forwardMaxSum[i] = forwardMaxSum[i - 1] + arr[i];
        }
        max = Math.max(max, forwardMaxSum[i]);
    }

    let withDeletion = Array(arr.length).fill(0);

    for (let i = 1; i < withDeletion.length; i++) {
        const deleteCurrent = forwardMaxSum[i - 1];
        const dontDeleteCurrent = withDeletion[i - 1] + arr[i];
        withDeletion[i] = Math.max(deleteCurrent, dontDeleteCurrent);
        max = Math.max(max, withDeletion[i]);
    }

    return max;
};


var maximumSum = function(arr) {
    const n = arr.length;
    let forwardMaxSum = Array(n).fill();
    forwardMaxSum[0] = arr[0]; 
    let backwardMaxSum = Array(n).fill();
    backwardMaxSum[n - 1] = arr[n - 1];
    
    let max = arr[0];

    for (let i = 1; i < n; i++) {
        if (forwardMaxSum[i - 1] < 0) {
            forwardMaxSum[i] = arr[i];
        } else {
            forwardMaxSum[i] = forwardMaxSum[i - 1] + arr[i];
        }
        max = Math.max(max, forwardMaxSum[i]);
    }

    console.log(forwardMaxSum)

    for (let i = n - 2; i >= 0; i--) {
        if (backwardMaxSum[i + 1] < 0) {
            backwardMaxSum[i] = arr[i];
        } else {
            backwardMaxSum[i] = backwardMaxSum[i + 1] + arr[i];
        }
        max = Math.max(max, backwardMaxSum[i]);
    }

    for (let i = 0; i <= n - 3; i++) {
        max = Math.max(max, forwardMaxSum[i] + backwardMaxSum[i + 2]);
    }

    return max;
};