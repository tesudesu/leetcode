// https://leetcode.com/problems/minimize-length-of-array-using-operations/

var minimumArrayLength = function(nums) {
    let min = Infinity;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
            count = 1;
        } else if (nums[i] === min) {
            count++;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        const currMin = Math.min(nums[i] % min, min % nums[i]); 
        if (currMin === 0) continue;
        
        if (currMin < min) {
            min = currMin;
            count = 1;
        }
    }

    if (count === 1) {
        return 1;
    }

    return Math.ceil(count / 2);
};