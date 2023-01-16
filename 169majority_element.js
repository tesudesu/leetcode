// https://leetcode.com/problems/majority-element/

var majorityElement = function(nums) {   
    const numsLength = nums.length;
    let element = [];
    while (element.length < numsLength/2) {
        element = nums.filter((elem) => elem == nums[0]);
        let elementWithout = nums.filter((elem) => elem !== nums[0]);
        nums = elementWithout;
    }
    return element[0];
};
