// https://leetcode.com/problems/design-a-food-rating-system/

const { PriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */
var FoodRatings = function (foods, cuisines, ratings) {
    this.foodToRating = new Map();
    this.foodToCuisine = new Map();
    this.cuisineToFoods = new Map();
    for (let i = 0; i < foods.length; i++) {
        this.foodToRating.set(foods[i], ratings[i]);
        this.foodToCuisine.set(foods[i], cuisines[i]);
        if (this.cuisineToFoods.has(cuisines[i])) {
            const maxQueue = this.cuisineToFoods.get(cuisines[i]);
            maxQueue.enqueue([foods[i], ratings[i]]);
            this.cuisineToFoods.set(cuisines[i], maxQueue);
        } else {
            const maxQueue = new PriorityQueue((a, b) => {
                if (a[1] < b[1]) {
                    return 1;
                } else if (a[1] > b[1]) {
                    return -1;
                } else {
                    return a[0] < b[0] ? -1 : 1;
                }
            });
            maxQueue.enqueue([foods[i], ratings[i]]);
            this.cuisineToFoods.set(cuisines[i], maxQueue);
        }
    }
};

/** 
 * @param {string} food 
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function (food, newRating) {
    this.foodToRating.set(food, newRating);
    const cuisine = this.foodToCuisine.get(food);
    const foods = this.cuisineToFoods.get(cuisine);
    foods.enqueue([food, newRating]);
    this.cuisineToFoods.set(cuisine, foods);
};

/** 
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function (cuisine) {
    const maxQueue = this.cuisineToFoods.get(cuisine);
    while (true) {
        const [food, rating] = maxQueue.front();
        const shouldRating = this.foodToRating.get(food);
        if (shouldRating === rating) {
            return food;
        }
        maxQueue.dequeue();
    }
};