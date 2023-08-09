// https://leetcode.com/problems/3sum/

var threeSum = function(nums) {
    nums.sort((a, b) => a - b);

    let ans = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            if (left !== i + 1 && nums[left] === nums[left - 1]) {
                left++;
                continue;
            }
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                ans.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }

    return ans;
};


// var threeSum = function(nums) {
//     nums.sort((a, b) => a - b);
//     const added = new Set();

//     let ans = [];

//     for (let i = 0; i < nums.length - 2; i++) {
//         let left = i + 1;
//         let right = nums.length - 1;
//         while (left < right) {
//             const sum = nums[i] + nums[left] + nums[right];
//             if (sum === 0) {
//                 const key = `${nums[i]},${nums[left]},${nums[right]}`;
//                 if (!added.has(key)) {
//                     ans.push([nums[i], nums[left], nums[right]]);
//                     added.add(key);
//                 }
//                 left++;
//                 right--;
//             } else if (sum > 0) {
//                 right--;
//             } else {
//                 left++;
//             }
//         }
//     }

//     return ans;
// };