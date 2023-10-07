// https://leetcode.com/problems/beautiful-towers-ii/

var maximumSumOfHeights = function(maxHeights) {
    let left = Array(maxHeights.length).fill(0);
    let right = Array(maxHeights.length).fill(0);

    let stack = [0];

    for (let i = 1; i < left.length; i++) {
        while (maxHeights[i] < maxHeights[stack[stack.length - 1]]) {
            stack.pop();
        }
        if (stack.length === 0) {
            left[i] = i * maxHeights[i];
        } else {
            const prev = stack[stack.length - 1];
            left[i] = left[prev] + maxHeights[prev] + (i - prev - 1) * maxHeights[i];
        }
        stack.push(i);
    }

    stack = [right.length - 1];

    for (let i = right.length - 2; i >= 0; i--) {
        while (maxHeights[i] < maxHeights[stack[stack.length - 1]]) {
            stack.pop();
        }
        if (stack.length === 0) {
            right[i] = (right.length - i - 1) * maxHeights[i];
        } else {
            const prev = stack[stack.length - 1];
            right[i] = right[prev] + maxHeights[prev] + (prev - i - 1) * maxHeights[i];
        }
        stack.push(i);
    }

    let maxSum = 0;

    for (let i = 0; i < maxHeights.length; i++) {
        maxSum = Math.max(maxSum, maxHeights[i] + left[i] + right[i]);
    }

    return maxSum;
};


// TLE, without using monotonic stack

// var maximumSumOfHeights = function(maxHeights) {
//     let left = Array(maxHeights.length).fill(0);
//     let right = Array(maxHeights.length).fill(0);

//     for (let i = 1; i < maxHeights.length; i++) {
//         left[i] = i * maxHeights[i];
//         for (let j = i - 1; j >= 0; j--) {
//             if (maxHeights[j] < maxHeights[i]) {
//                 left[i] = left[j] + maxHeights[j] + (i - j - 1) * maxHeights[i];
//                 break;
//             }
//         }
//     }

//     for (let i = maxHeights.length - 2; i >= 0; i--) {
//         right[i] = (maxHeights.length - i - 1) * maxHeights[i];
//         for (let j = i + 1; j < maxHeights.length; j++) {
//             if (maxHeights[j] < maxHeights[i]) {
//                 right[i] = right[j] + maxHeights[j] + (j - i - 1) * maxHeights[i];
//                 break;
//             }
//         }
//     }

//     let maxSum = 0;

//     for (let i = 0; i < maxHeights.length; i++) {
//         maxSum = Math.max(maxSum, maxHeights[i] + left[i] + right[i]);
//     }

//     return maxSum;
// };