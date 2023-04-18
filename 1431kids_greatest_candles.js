// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

var kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies);
    let ans = [];
    for (let i = 0; i < candies.length; i++) {
        ans.push(candies[i] + extraCandies >= max);
    }
    return ans;
};