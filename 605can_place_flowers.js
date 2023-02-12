// https://leetcode.com/problems/can-place-flowers/

var canPlaceFlowers = function(flowerbed, n) {
    let total = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] == 0) {
            if ((flowerbed[i-1] == 0 || flowerbed[i-1] == null) && (flowerbed[i+1] == 0 || flowerbed[i+1] == null)) {
                total++;
                flowerbed[i] = 1;
            }
        }
    }
    return total >= n;
};