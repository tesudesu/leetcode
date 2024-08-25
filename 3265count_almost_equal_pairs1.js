// https://leetcode.com/problems/count-almost-equal-pairs-i/

var countPairs = function(nums) {
    const isAlmostEqual = (num1, num2) => {
        let arr1 = [];
        let count1 = new Map();
        while (num1 > 0) {
            let digit = num1 % 10;
            arr1.push(digit);
            count1.set(digit, (count1.get(digit) + 1) || 1);
            num1 = Math.floor(num1 / 10);
        }
        let arr2 = [];
        let count2 = new Map();
        while (num2 > 0) {
            let digit = num2 % 10;
            arr2.push(digit);
            count2.set(digit, (count2.get(digit) + 1) || 1);
            num2 = Math.floor(num2 / 10);
        }

        for (const [num, count] of count1) {
            if (num !== 0) {
                if (!count2.has(num) || count !== count2.get(num)) {
                    return false;
                }
            }
        }

        for (const [num, count] of count2) {
            if (num !== 0) {
                if (!count1.has(num) || count !== count1.get(num)) {
                    return false;
                }
            }
        }

        while (arr1.length < arr2.length) {
            arr1.push(0);
        }
        while (arr2.length < arr1.length) {
            arr2.push(0);
        }

        let i = 0;
        
        let changes = 0;
        while (i < arr1.length) {
            if (arr1[i] !== arr2[i]) {
                changes++;
            }
            i++;
        }

        return changes === 0 || changes === 2;
    }

    let tot = 0;

    for (let i = 0; i < nums.length; i++)  {
        for (let j = i + 1; j < nums.length; j++) {
            if (isAlmostEqual(nums[i], nums[j])) {
                tot++;
            }
        }
    }

    return tot;
};