// https://leetcode.com/problems/permutations-ii/

var permuteUnique = function (nums) {
    let res = [];
    let counts = new Map();

    for (let i = 0; i < nums.length; i++) {
        counts.set(nums[i], (counts.get(nums[i]) + 1) || 1);
    }

    const find = (arr) => {
        if (arr.length === nums.length) {
            res.push(arr.slice());
            return;
        }

        for (const [val, count] of counts) {
            if (count > 0) {
                arr.push(val);
                counts.set(val, counts.get(val) - 1);
                find(arr);
                arr.pop();
                counts.set(val, counts.get(val) + 1);
            }
        }
    }

    find([]);

    return res;
};


// var permuteUnique = function (nums) {
//     let res = [];
//     let visited = Array(nums.length).fill(false);
//     let set = new Set();

//     const find = (arr) => {
//         if (arr.length === nums.length) {
//             const str = arr.toString();
//             if (!set.has(str)) {
//                 res.push(arr.slice());
//                 set.add(str);
//             }
//             return;
//         }

//         for (let i = 0; i < nums.length; i++) {
//             if (visited[i]) continue;
//             arr.push(nums[i]);
//             visited[i] = true;
//             find(arr);
//             arr.pop();
//             visited[i] = false;
//         }
//     }

//     find([]);

//     return res;
// };