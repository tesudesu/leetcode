// https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/

var findThePrefixCommonArray = function(A, B) {
    const count = Array(A.length + 1).fill(0);
    const ans = Array(A.length).fill(0);

    for (let i = 0; i < A.length; i++) {
        count[A[i]]++;
        if (count[A[i]] === 2) {
            ans[i]++;
        }
        count[B[i]]++;
        if (count[B[i]] === 2) {
            ans[i]++;
        }
        if (i > 0) {
            ans[i] += ans[i - 1];
        }
    }

    return ans;
};