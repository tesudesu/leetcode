// https://leetcode.com/problems/beautiful-towers-i/

var maximumSumOfHeights = function(maxHeights) {
    let maxSum = 0;

    for (let i = 0; i < maxHeights.length; i++) {
        let sum = maxHeights[i];
        let prev = maxHeights[i];
        for (let j = i - 1; j >= 0; j--) {
            sum += Math.min(maxHeights[j], prev);
            prev = Math.min(maxHeights[j], prev);
        }
        
        prev = maxHeights[i];
        for (let j = i + 1; j < maxHeights.length; j++) {
            sum += Math.min(maxHeights[j], prev);
            prev = Math.min(maxHeights[j], prev);
        }
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
};