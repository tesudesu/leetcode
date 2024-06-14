// https://leetcode.com/problems/height-checker/

var heightChecker = function(heights) {
    let sorted = heights.toSorted((a, b) => a - b);

    let tot = 0;

    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sorted[i]) {
            tot++;
        }
    }
    
    return tot;
};