// https://leetcode.com/problems/fruit-into-baskets/

var totalFruit = function(fruits) {
    let left = 0;

    let max = 0;

    let taken = new Map();

    for (let i = 0; i < fruits.length; i++) {
        taken.set(fruits[i], (taken.get(fruits[i]) + 1) || 1);
        while (taken.size > 2) {
            taken.set(fruits[left], taken.get(fruits[left]) - 1);
            if (taken.get(fruits[left]) === 0) {
                taken.delete(fruits[left]);
            }
            left++;
        }
        max = Math.max(max, i - left + 1);
    }

    return max;
};