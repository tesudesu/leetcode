// https://leetcode.com/problems/finding-the-number-of-visible-mountains/

var visibleMountains = function(peaks) {
    let xRanges = Array(peaks.length).fill();

    for (let i = 0; i < peaks.length; i++) {
        let x = peaks[i][0] - peaks[i][1];
        let y = peaks[i][0] + peaks[i][1];
        xRanges[i] = [x, y];
    }

    xRanges.sort((a, b) => {
        if (a[0] < b[0]) {
            return -1;
        } else if (a[0] > b[0]) {
            return 1;
        } else {
            return a[1] > b[1] ? -1 : 1;
        }
    });
    xRanges.push([200001, 200001]);

    let tot = 0;
    let i = 0;
    let xMax = -Infinity;

    while (i < xRanges.length - 1) {
        xMax = Math.max(xMax, xRanges[i][1]);
        let same = false;
        while (xRanges[i][0] === xRanges[i + 1][0] && xRanges[i][1] === xRanges[i + 1][1]) {
            i++;
            same = true;
        }
        while (xMax >= xRanges[i + 1][1]) {
            i++;
        }
        if (same) {
            i++;
            continue;
        }
        if (i < xRanges.length - 1) {
            tot++;
        } else {
            break;
        }
        
        i++;
    } 

    return tot;
};