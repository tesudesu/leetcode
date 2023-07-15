// https://leetcode.com/problems/longest-increasing-subsequence/

// DP, O(n^2) time

var lengthOfLIS = function(nums) {
    let dp = Array(nums.length).fill(1);
    
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j] && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
            }
        }
    }

    return Math.max(...dp);
};

// var lengthOfLIS = function(nums) {
//     let dp = Array(nums.length).fill(1);
    
//     for (let i = 1; i < nums.length; i++) {
//         for (let j = 0; j < i; j++) {
//             if (nums[i] > nums[j]) {
//                 dp[i] = Math.max(dp[i], dp[j] + 1);
//             }
//         }
//     }

//     return Math.max(...dp);
// };


// Binary search, O(nlogn) time

var lengthOfLIS = function(nums) {
    let subsequence = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > subsequence[subsequence.length - 1]) {
            subsequence.push(nums[i]);
        } else if (nums[i] === subsequence[subsequence.length - 1]) {
            continue;
        } else {
            let start = 0;
            let end = subsequence.length - 1;

            while (start <= end) {
                const mid = Math.floor((end - start) / 2) + start;

                if (subsequence[mid] === nums[i]) {
                    break;
                } else if (subsequence[mid] < nums[i]) {
                    start = mid + 1;
                } else {
                    end = mid;
                }

                if (start === end) {
                    subsequence[end] = nums[i];
                    break;
                }
            }
        }
    }

    return subsequence.length;
};