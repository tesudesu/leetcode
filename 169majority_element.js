// https://leetcode.com/problems/majority-element/

// Boyer-Moore Voting Algorithm

var majorityElement = function(nums) {
    let count = 0;
    let candidate;
    
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
        }
        if (nums[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }

    return candidate;
};


// var majorityElement = function(nums) {
//     nums.sort((a, b) => a - b);

//     return nums[Math.floor(nums.length / 2)];
// };


// var majorityElement = function(nums) {   
//     const numsLength = nums.length;
//     let element = [];
//     while (element.length < numsLength/2) {
//         element = nums.filter((elem) => elem == nums[0]);
//         let elementWithout = nums.filter((elem) => elem !== nums[0]);
//         nums = elementWithout;
//     }
//     return element[0];
// };