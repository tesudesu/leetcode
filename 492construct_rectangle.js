// https://leetcode.com/problems/construct-the-rectangle/

// SOLUTION 1

var constructRectangle = function(area) {
    for (let i = Math.floor(Math.sqrt(area)); i >= 1; i--) {
        if (area % i == 0) {
            return [area/i, i];
        }
    }
};

// SOLUTION 2

var constructRectangle = function(area) {
    let factors = new Map();
    const limit = Math.ceil(Math.sqrt(area));
    for (let i = 1; i <= limit; i++) {
        if (!factors.has(i) && area % i == 0) {
            factors.set(area/i, i);
        }
    }
    return [...factors][factors.size-1];
    
};

// var constructRectangle = function(area) {
//     let factors = new Map();
//     for (let i = 1; i <= area; i++) {
//         if (!factors.has(i) && area % i == 0) {
//             factors.set(area/i, i);
//         }
//     }
//     return [...factors][factors.size-1];
// };