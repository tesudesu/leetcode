// https://leetcode.com/problems/sorting-three-groups/

var minimumOperations = function(nums) {
    let min = Infinity;

    for (let i = 0; i <= nums.length; i++) {
        for (let j = i; j <= nums.length; j++) {
            let count = 0;
            for (let k = 0; k < nums.length; k++) {
                if (k < i) {
                    if (nums[k] !== 1) {
                        count++;
                    }
                } else if (k < j) {
                    if (nums[k] !== 2) {
                        count++;
                    }
                } else {
                    if (nums[k] !== 3) {
                        count++;
                    }
                }
            }

            min = Math.min(min, count);
        }
    }

    return min;
};


// var minimumOperations = function(nums) {
//     let dp = Array(nums.length).fill(1);

//     for (let i = 1; i < nums.length; i++) {
//         for (let j = 0; j < i; j++) {
//             if (nums[i] >= nums[j]) {
//                 dp[i] = Math.max(dp[i], dp[j] + 1);
//             }
//         }
//     }

//     return nums.length - Math.max(...dp);
// };