// https://leetcode.com/problems/count-complete-subarrays-in-an-array/

var countCompleteSubarrays = function(nums) {
    let tot = 0;

    let unique = new Set(nums).size;

    for (let i = unique - 1; i < nums.length; i++) {
        let currSet = new Set();
        for (let j = i - unique + 1; j < i; j++) {
            currSet.add(nums[j]);
        }
        for (let j = i; j < nums.length; j++) {
            currSet.add(nums[j]);
            if (currSet.size === unique) {
                tot += nums.length - j;
                break;
            }
        }
    }

    return tot;
};

// var countCompleteSubarrays = function(nums) {
//     let tot = 0;

//     let unique = new Set(nums).size;
    
//     let map = new Map();

//     let window = new Set();

//     for (let i = 0; i < unique - 1; i++) {
//         map.set(nums[i], (map.get(nums[i]) || 0) + 1);
//         window.add(nums[i]);
//     }

//     let left = 0;

//     for (let i = unique - 1; i < nums.length; i++) {
//         let currSet = new Set(window);
//         for (let j = i; j < nums.length; j++) {
//             currSet.add(nums[j]);
//             if (currSet.size === unique) {
//                 tot += nums.length - j;
//                 break;
//             }
//         }
//         map.set(nums[left], map.get(nums[left]) - 1);
//         if (map.get(nums[left]) === 0) {
//             map.delete(nums[left]);
//             window.delete(nums[left]);
//         }
//         map.set(nums[i], (map.get(nums[i]) || 0) + 1);
//         window.add(nums[i]);
//         left++;
//     }

//     return tot;
// };