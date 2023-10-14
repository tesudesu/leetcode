// https://leetcode.com/problems/video-stitching/

var videoStitching = function(clips, time) {
    clips.sort((a, b) => {
        if (a[0] < b[0]) {
            return -1;
        } else if (a[0] > b[0]) {
            return 1;
        } else {
            if (a[1] < b[1]) {
                return 1;
            } else if (a[1] > b[1]) {
                return -1;
            } else {
                return 0;
            }
        }
    });

    let dp = Array(time + 1).fill(Infinity);

    if (clips[0][0] !== 0) return -1;

    for (let i = clips[0][0]; i <= clips[0][1]; i++) {
        dp[i] = 1;
    }

    let clipsIndex = 1;

    for (let i = clips[0][1] + 1; i < dp.length; i++) {
        if (clipsIndex >= clips.length) return -1;
        if (i <= clips[clipsIndex][1]) {
            dp[i] = 1 + dp[clips[clipsIndex][0]];
            if (dp[i] === Infinity) return -1;
        } else {
            clipsIndex++;
            i--;
        }
    }

    return dp[time];
};