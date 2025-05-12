// https://leetcode.com/problems/smallest-rectangle-enclosing-black-pixels/

var minArea = function(image, x, y) {
    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;

    for (let i = 0; i < image.length; i++) {
        for (let j = 0; j < image[0].length; j++) {
            if (image[i][j] === "1") {
                minX = Math.min(minX, i);
                maxX = Math.max(maxX, i);
                minY = Math.min(minY, j);
                maxY = Math.max(maxY, j);
            }
        }
    }

    if (minX !== Infinity) {
        return (maxX - minX + 1) * (maxY - minY + 1);
    }

    return 0;
};