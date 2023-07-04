// https://leetcode.com/problems/continuous-subarrays/

var continuousSubarrays = function(nums) {
    let map = new Map();

    let tot = 0;

    let left = 0;

    for (let i = 0; i < nums.length; i++) {
        if (!map.get(nums[i])) {
            map.set(nums[i], 1);
        } else {
            map.set(nums[i], map.get(nums[i])++);
        }
        let keys = [...map.keys()];
        let min = Math.min(...keys);
        let max = Math.max(...keys);

        while (max - min > 2) {
            map.set(nums[left], map.get(nums[left]--));
            if (map.get(nums[left]) === 0) {
                map.delete(nums[left]);
            }
            keys = [...map.keys()];
            min = Math.min(...keys);
            max = Math.max(...keys);
            left++;
        }

        tot += i - left + 1;
    }

    return tot;
};


// var continuousSubarrays = function(nums) {
//     let map = {};

//     let tot = 0;

//     let left = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (!map[nums[i]]) {
//             map[nums[i]] = 1;
//         } else {
//             map[nums[i]]++;
//         }
//         let keys = Object.keys(map).map(item => Number(item));
//         let min = Math.min(...keys);
//         let max = Math.max(...keys);

//         while (max - min > 2) {
//             map[nums[left]]--;
//             if (map[nums[left]] === 0) {
//                 delete map[nums[left]];
//             }
//             keys = Object.keys(map).map(item => Number(item));
//             min = Math.min(...keys);
//             max = Math.max(...keys);
//             left++;
//         }

//         tot += i - left + 1;
//     }

//     return tot;
// };