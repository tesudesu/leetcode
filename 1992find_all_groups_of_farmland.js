// https://leetcode.com/problems/find-all-groups-of-farmland/

var findFarmland = function(land) {
    let ans = [];
    const farm = Array(land.length).fill().map(() => Array(land[0].length).fill(false));

    for (let i = 0; i < land.length; i++) {
        for (let j = 0; j < land[0].length; j++) {
            if (land[i][j] === 0 || farm[i][j]) continue;
            let iend = land.length - 1;
            let jend = land[0].length - 1;
            for (let k = i + 1; k < land.length; k++) {
                if (land[k][j] === 0) {
                    iend = k - 1;
                    break;
                }
            }
            for (let k = j + 1; k < land[0].length; k++) {
                if (land[i][k] === 0) {
                    jend = k - 1;
                    break;
                }
            }
            for (let k = i; k <= iend; k++) {
                for (let q = j; q <= jend; q++) {
                    farm[k][q] = true;
                }
            }
            ans.push([i, j, iend, jend]);
        }
    }

    return ans;
};