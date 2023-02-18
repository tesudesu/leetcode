// https://leetcode.com/problems/categorize-box-according-to-criteria/

var categorizeBox = function(length, width, height, mass) {
    let heavy = false;
    let bulky = false;
    if (mass >= 100) {
        heavy = true;
    }
    if (length >= 1e4 || width >= 1e4 || height >= 1e4 || length * width * height >= 1e9) {
        bulky = true;
    }
    if (heavy && bulky) {
        return 'Both';
    } else if (heavy && !bulky) {
        return 'Heavy';
    } else if (!heavy && bulky) {
        return 'Bulky';
    } else {
        return 'Neither';
    }
};