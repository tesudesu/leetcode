// https://leetcode.com/problems/permutations/

var permute = function(nums) {
    let ans = [];

    const backtrack = (arr, set) => {
        if (arr.length === nums.length) {
            ans.push(arr.slice());
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (!set.has(nums[i])) {
                arr.push(nums[i]);
                set.add(nums[i]);
                backtrack(arr, set);
                arr.pop();
                set.delete(nums[i]);
            }
        }
    }

    backtrack([], new Set());

    return ans;
};

// var permute = function(nums) {
//     let ans = [];

//     const backtrack = (arr) => {
//         if (arr.length === nums.length) {
//             ans.push(arr.slice());
//             return;
//         }

//         for (let i = 0; i < nums.length; i++) {
//             if (!arr.includes(nums[i])) {
//                 arr.push(nums[i]);
//                 backtrack(arr);
//                 arr.pop();
//             }
//         }
//     }

//     backtrack([]);

//     return ans;
// };