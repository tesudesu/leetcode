// https://leetcode.com/problems/set-mismatch/

// O(n) space

var findErrorNums = function(nums) {
    const set = new Set();
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            res.push(nums[i]);
        }
        set.add(nums[i]);
    }

    for (let i = 1; i <= nums.length; i++) {
        if (!set.has(i)) {
            res.push(i);
            break;
        }
    }

    return res;
};


// O(1) space

var findErrorNums = function(nums) {
    const ans = Array(2).fill();

    for (let i = 0; i < nums.length; i++) {
        const num = Math.abs(nums[i]);
        if (nums[num - 1] < 0) {
            ans[0] = num;
        } else {
            nums[num - 1] *= -1;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            ans[1] = i + 1;
            return ans;
        }
    }
};


// var findErrorNums = function(nums) {
//     nums.sort((a,b) => a-b);
//     let duplicate = 0;
//     for (let i = 0; i < nums.length-1; i++) {
//         if (nums[i] == nums[i+1]) {
//             duplicate = nums[i];
//             break;
//         }
//     }
//     let totalShould = 0;
//     for (let i = 1; i <= nums.length; i++) {
//         totalShould += i;
//     }
//     let totalActual = 0;
//     for (let i = 0; i < nums.length; i++) {
//         totalActual += nums[i];
//     }
//     return [duplicate, totalShould - (totalActual - duplicate)];
// };