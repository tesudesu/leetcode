// https://leetcode.com/problems/unique-binary-search-trees/

var numTrees = function(n) {
    let arr = Array(n + 1).fill(1);

    for (let i = 2; i <= n; i++) {
        let sum = 0;
        for (let j = 1; j <= i; j++) {
            let left = j - 1;
            let right = i - j;
            sum += arr[left] * arr[right];
        }
        arr[i] = sum;
    }

    return arr[n];
};