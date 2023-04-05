// https://leetcode.com/problems/k-items-with-the-maximum-sum/

var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
    if (k <= numOnes) {
        return k;
    } else {
        let tot = numOnes;
        let remain = k - numOnes;
        if (remain <= numZeros) {
            return tot;
        }  else {
            remain -= numZeros;
            return tot - remain;
        }
    }
};