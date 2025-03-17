// https://leetcode.com/problems/letter-tile-possibilities/

var numTilePossibilities = function(tiles) {
    const count = Array(26).fill(0);

    for (let i = 0; i < tiles.length; i++) {
        count[tiles.charCodeAt(i) - 65]++;
    }

    const set = new Set();
    let arr = [];

    const bt = (size) => {
        if (size > tiles.length) return;
        for (let j = 0; j < 26; j++) {
            if (count[j] > 0) {
                arr.push(String.fromCharCode(65 + j));
                set.add(arr.join(""));
                count[j]--;
                bt(size + 1);
                arr.pop();
                count[j]++;
            }
        }
    }

    bt(0);

    return set.size;
};


var numTilePossibilities = function(tiles) {
    const count = Array(26).fill(0);

    for (let i = 0; i < tiles.length; i++) {
        count[tiles.charCodeAt(i) - 65]++;
    }

    let tot = 0;

    const bt = () => {
        for (let j = 0; j < 26; j++) {
            if (count[j] > 0) {
                tot++;
                count[j]--;
                bt();
                count[j]++;
            }
        }
    }

    bt();

    return tot;
};