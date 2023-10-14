// https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/

var findAllRecipes = function(recipes, ingredients, supplies) {
    const supply = new Set(supplies);
    const notPossible = new Set();
    const visited = new Set();

    let recipeToIngredients = {};

    for (let i = 0; i < recipes.length; i++) {
        recipeToIngredients[recipes[i]] = ingredients[i];
    }

    const isPossible = (recipe) => {
        if (visited.has(recipe)) return false;
        visited.add(recipe);
        if (!recipeToIngredients[recipe] || notPossible.has(recipe)) return false;
        if (supply.has(recipe)) return true;

        let possible = true;
        for (let i = 0; i < recipeToIngredients[recipe].length; i++) {
            const ingredient = recipeToIngredients[recipe][i];
            if (!supply.has(ingredient)) {
                if (!isPossible(ingredient)) {
                    possible = false;
                    break;
                }
            }
        }

        if (possible) {
            supply.add(recipe);
            return true;
        } else {
            notPossible.add(recipe);
            return false;
        }
    }

    let ans = [];

    for (let i = 0; i < recipes.length; i++) {
        if (notPossible.has(recipes[i])) continue;
        if (supply.has(recipes[i]) || isPossible(recipes[i])) {
            ans.push(recipes[i]);
        }
    }

    return ans;
};