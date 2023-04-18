// https://leetcode.com/problems/flipping-an-image/

var flipAndInvertImage = function(image) {
    let res = [];
    for (let i = 0; i < image.length; i++) {
        let curr = [];
        for (let j = 0; j < image[i].length; j++) {
            if (image[i][j] === 0) {
                curr.unshift(1);
            } else {
                curr.unshift(0);
            }
        }
        res.push(curr);
    }
    return res;
};