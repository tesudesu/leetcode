// https://leetcode.com/problems/find-the-n-th-value-after-k-seconds/

var valueAfterKSeconds = function(n, k) {
    const arr = Array(n).fill(1);
    const mod = 1e9 + 7;

    let second = 0;

    while (second < k) {
        let sum = arr[0];
        for (let i = 1; i < arr.length; i++) {
            sum = (sum + arr[i]) % mod;
            arr[i] = sum;
        }
        second++;
    }

    return arr[arr.length - 1];
};