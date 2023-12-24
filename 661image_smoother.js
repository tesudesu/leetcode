// https://leetcode.com/problems/image-smoother/submissions/

// O(1) space

var imageSmoother = function(img) {
    for (let i = 0; i < img.length; i++) {
        for (let j = 0; j < img[0].length; j++) {
            let tot = 0;
            let count = 0;
            for (let k = i - 1; k <= i + 1; k++) {
                for (let q = j - 1; q <= j + 1; q++) {
                    if (k >= 0 && k < img.length && q >= 0 && q < img[0].length) {
                        tot += img[k][q] % 256;
                        count++;
                    }
                }
            }
            img[i][j] = Math.floor(tot / count) * 256 + img[i][j];
        }
    }

    for (let i = 0; i < img.length; i++) {
        for (let j = 0; j < img[0].length; j++) {
            img[i][j] = Math.floor(img[i][j] / 256);
        }
    }

    return img;
};


// O(m * n) space

var imageSmoother = function(img) {
    const x = img.length;
    const y = img[0].length;
    let res = [];
    for (let i = 0; i < x; i++) {
        let sub = [];
        for (let j = 0; j < y; j++) {
            let n = 1;
            let tot = img[i][j];
            if (i-1 >= 0) {
                tot += img[i-1][j];
                n++;
                if (j-1 >= 0) {
                    tot += img[i-1][j-1];
                    n++;
                }
                if (j+1 < y) {
                    tot += img[i-1][j+1];
                    n++;
                }
            }
            if (i+1 < x) {
                tot += img[i+1][j];
                n++;
                if (j-1 >= 0) {
                    tot += img[i+1][j-1];
                    n++;
                }
                if (j+1 < y) {
                    tot += img[i+1][j+1];
                    n++;
                }
            }
            if (j-1 >= 0) {
                tot += img[i][j-1];
                n++;
            }
            if (j+1 < y) {
                tot += img[i][j+1];
                n++;
            }
            sub.push(Math.floor(tot/n));
        }
        res.push(sub);
    }
    return res;
};