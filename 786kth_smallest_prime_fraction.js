// https://leetcode.com/problems/k-th-smallest-prime-fraction/

var kthSmallestPrimeFraction = function(arr, k) {
    let left = 0;
    let right = 1;

    while (left < right) {
        const mid = (right - left) / 2 + left;

        let maxFraction = 0;
        let totLessThanOrEqualToMid = 0;
        let numeratorIndex = 0;
        let denominatorIndex = 0;
        let j = 1;

        for (let i = 0; i < arr.length - 1; i++) {
            while (j < arr.length && arr[i] / arr[j] > mid) {
                j++;
            }
            
            totLessThanOrEqualToMid += arr.length - j;

            if (j === arr.length) break;

            const fraction = arr[i] / arr[j];

            if (fraction > maxFraction) {
                numeratorIndex = i;
                denominatorIndex = j;
                maxFraction = fraction;
            }
        }

        if (totLessThanOrEqualToMid === k) {
            return [arr[numeratorIndex], arr[denominatorIndex]];
        } else if (totLessThanOrEqualToMid > k) {
            right = mid;
        } else {
            left = mid;
        }
    }
};


// var kthSmallestPrimeFraction = function(arr, k) {
//     let nums = [];

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             nums.push([arr[i] / arr[j], arr[i], arr[j]]);
//         }
//     }

//     nums.sort((a, b) => a[0] - b[0]);

//     return [nums[k - 1][1], nums[k - 1][2]];
// };