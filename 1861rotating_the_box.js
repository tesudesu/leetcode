// https://leetcode.com/problems/rotating-the-box/

var rotateTheBox = function (box) {
    for (let i = 0; i < box.length; i++) {
        let j = box[0].length - 1;
        while (j >= 0) {
            if (box[i][j] === "#") {
                let ind = j;
                while (ind + 1 < box[0].length && box[i][ind + 1] === ".") {
                    box[i][ind] = ".";
                    box[i][ind + 1] = "#";
                    ind++;
                }
            }
            j--;
        }
    }

    let newBox = Array(box[0].length).fill().map(() => Array(box.length).fill());

    for (let i = box.length - 1; i >= 0; i--) {
        for (let j = 0; j < box[0].length; j++) {
            newBox[j][box.length - 1 - i] = box[i][j];
        }
    }

    return newBox;
};