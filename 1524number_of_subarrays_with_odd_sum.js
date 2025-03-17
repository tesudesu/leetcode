// https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/

var numOfSubarrays = function(arr) {
    const mod = 1e9 + 7;

    let odd = 0;
    let even = 1;

    let currSum = 0;

    let tot = 0;

    for (let i = 0; i < arr.length; i++) {
        currSum += arr[i];
        if (currSum % 2 === 0) {
            tot = (tot + odd) % mod;
            even++;
        } else {
            tot = (tot + even) % mod;
            odd++;
        }
    }

    return tot;
};