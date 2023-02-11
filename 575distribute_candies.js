// https://leetcode.com/problems/distribute-candies/

var distributeCandies = function(candyType) {
    let types = {};
    const length = candyType.length;
    for (let i = 0; i < length; i++) {
        if (!types[candyType[i]]) {
            types[candyType[i]] = 1;
        } else {
            types[candyType[i]]++;
        }
    }
    const numTypes = Object.keys(types).length;
    return numTypes > length/2 ? length/2 : numTypes;
};