// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

var twoSum = function(numbers, target) {
    let left = 0;

    for (let i = numbers.length - 1; i >= 0; i--) {
        if (numbers[i] + numbers[left] === target) {
            return [left + 1, i + 1];
        } else if (numbers[i] + numbers[left] < target) {
            left++;
            i++;
        }
    }
};