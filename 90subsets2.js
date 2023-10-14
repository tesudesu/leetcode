// https://leetcode.com/problems/subsets-ii/

// Backtracking

var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b);

    let ans = [];

    let subset = [];

    const backtrack = (ind) => {
        ans.push(subset.slice());
        for (let i = ind; i < nums.length; i++) {
            if (nums[i] !== nums[i - 1] || i === ind) {
                subset.push(nums[i]);
                backtrack(i + 1);
                subset.pop();
            }
        }
    }

    backtrack(0);

    return ans;
};


// var subsetsWithDup = function(nums) {
//     nums.sort((a, b) => a - b);

//     let ans = [];
//     let seen = new Set();

//     const backtrack = (currArr, ind) => {
//         if (currArr.length > nums.length) return;
//         const str = currArr.toString();
//         if (!seen.has(str)) {
//             ans.push(currArr.slice());
//             seen.add(str);
//         }
//         for (let i = ind; i < nums.length; i++) {
//             currArr.push(nums[i]);
//             backtrack(currArr, i + 1);
//             currArr.pop();
//         }
//     }

//     backtrack([], 0);

//     return ans;
// };


// Iterative

// var subsetsWithDup = function(nums) {
//     nums.sort((a, b) => a - b);

//     let ans = [[]];
//     let lastAdded = 0;

//     for (let i = 0; i < nums.length; i++) {
//         const length = ans.length;
//         if (nums[i] !== nums[i - 1]) {
//             for (let j = 0; j < length; j++) {
//                 let copy = ans[j].slice();
//                 copy.push(nums[i]);
//                 ans.push(copy);
//             }
//             lastAdded = length;
//         } else {
//             for (let j = length - 1; j >= length - lastAdded; j--) {
//                 let copy = ans[j].slice();
//                 copy.push(nums[i]);
//                 ans.push(copy);
//             } 
//         }
//     }

//     return ans;
// };