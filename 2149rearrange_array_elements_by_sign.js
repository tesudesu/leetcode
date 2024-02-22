// https://leetcode.com/problems/rearrange-array-elements-by-sign/

var rearrangeArray = function(nums) {
    const ans = Array(nums.length).fill();
    let p = 0;
    let n = 1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            ans[p] = nums[i];
            p += 2;
        } else {
            ans[n] = nums[i];
            n += 2;
        }
    }

    return ans;
};


// var rearrangeArray = function(nums) {
//     let pos = [];
//     let neg = [];

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] > 0) {
//             pos.push(nums[i]);
//         } else {
//             neg.push(nums[i]);
//         }
//     }

//     let ans = [];

//     let i = 0;
//     let j = 0;
//     let sign = 1;

//     while (i < pos.length || j < neg.length) {
//         if (sign === 1) {
//             ans.push(pos[i]);
//             i++;
//         } else {
//             ans.push(neg[j]);
//             j++;
//         }
//         sign *= -1;
//     }

//     return ans;
// };