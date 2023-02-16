// https://leetcode.com/problems/image-smoother/submissions/

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