// https://leetcode.com/problems/majority-element-ii/

// Boyer-Moore Voting Algorithm

var majorityElement = function(nums) {
    let candidate1 = nums[0];
    let candidate2 = null;
    let candidate1Count = 1;
    let candidate2Count = 0;

    let ans = new Set();

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === candidate1) {
            candidate1Count++;
        } else if (nums[i] === candidate2) {
            candidate2Count++;
        } else if (candidate1 === null) {
            candidate1 = nums[i];
            candidate1Count++;
        } else if (candidate2 === null) {
            candidate2 = nums[i];
            candidate2Count++;
        } else {
            candidate1Count--;
            candidate2Count--;
            if (candidate1Count === 0) {
                candidate1 = null;
                candidate1Count = 0;
            }
            if (candidate2Count === 0) {
                candidate2 = null;
                candidate2Count = 0;
            }
        }

        if (candidate1Count > Math.floor(nums.length / 3)) {
            ans.add(candidate1);
        }
        if (candidate2Count > Math.floor(nums.length / 3)) {
            ans.add(candidate2);
        }
    }

    if (ans.size === 2) return [...ans];

    candidate1Count = 0;
    candidate2Count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === candidate1) {
            candidate1Count++;
        } else if (nums[i] === candidate2) {
            candidate2Count++;
        }
    }

    if (candidate1Count > Math.floor(nums.length / 3)) {
        ans.add(candidate1);
    }
    if (candidate2Count > Math.floor(nums.length / 3)) {
        ans.add(candidate2);
    }

    return [...ans];
};


// var majorityElement = function(nums) {
//     nums.sort((a, b) => a - b);

//     const moreThan = Math.floor(nums.length / 3);

//     let ans = [];

//     let curr = 1;

//     for (let i = 1; i <= nums.length; i++) {
//         if (nums[i] === nums[i - 1]) {
//             curr++;
//         } else {
//             if (curr > moreThan) {
//                 ans.push(nums[i - 1]);
//             }
//             curr = 1;
//         }
//     }

//     return ans;
// };