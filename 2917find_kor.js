// https://leetcode.com/problems/find-the-k-or-of-an-array/

var findKOr = function(nums, k) {
    let ans = 0;

    for (let i = 0; i <= 31; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if ((nums[j] >> i) & 1 === 1) {
                count++;
            }
        }
        if (count >= k) {
            ans = ans | (1 << i);
        }
    }

    return ans;
};


// var findKOr = function(nums, k) {
//     let ans = 0;

//     const str = nums.map(a => a.toString(2));

//     for (let i = 0; i <= 31; i++) {
//         let count = 0;
//         for (let j = 0; j < str.length; j++) {
//             const length = str[j].length;
//             const index = length - 1 - i;
//             if (index >= 0 && str[j][index] === "1") {
//                 count++;
//             }
//         }
//         if (count >= k) {
//             ans += Math.pow(2, i);
//         }
//     }

//     return ans;
// };


// var findKOr = function(nums, k) {
//     let ans = 0;

//     for (let i = 0; i <= 31; i++) {
//         let count = 0;
//         let first = Math.pow(2, i);
//         for (let j = 0; j < nums.length; j++) {
//             let second = Math.pow(2, i) & nums[j];
//             if (first === second) {
//                 count++;
//             }
//         }
//         if (count >= k) {
//             ans += Math.pow(2, i);
//         }
//     }

//     return ans;
// };