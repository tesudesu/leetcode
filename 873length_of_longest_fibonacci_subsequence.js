// https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/

var lenLongestFibSubseq = function(arr) {
    const map = new Map();

    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], i); 
    }

    const dp = Array(arr.length).fill().map(() => Array(arr.length).fill(2));

    let max = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = arr.length - 1; j > i; j--) {
            let sum = arr[i] + arr[j];
            if (map.has(sum)) {
                dp[i][j] = 1 + dp[j][map.get(sum)];
                max = Math.max(max, dp[i][j]);
            }
        }
    }

    return max > 2 ? max : 0;
};


var lenLongestFibSubseq = function(arr) {
    const dp = Array(arr.length).fill().map(() => Array(arr.length).fill(2));

    let max = 0;

    for (let i = 2; i < arr.length; i++) {
        let start = 0;
        let end = i - 1;

        while (start < end) {
            let sum = arr[start] + arr[end];
            if (sum > arr[i]) {
                end--;
            } else if (sum < arr[i]) {
                start++;
            } else {
                dp[end][i] = 1 + dp[start][end];
                max = Math.max(max, dp[end][i]);
                start++;
            }
        }
    }

    return max > 2 ? max : 0;
};