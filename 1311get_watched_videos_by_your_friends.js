// https://leetcode.com/problems/get-watched-videos-by-your-friends/

var watchedVideosByFriends = function(watchedVideos, friends, id, level) {
    const minDist = Array(watchedVideos.length).fill(Infinity);
    minDist[id] = 0;

    const dfs = (person, currLevel) => {
        if (currLevel > minDist[person]) {
            return;
        }

        if (currLevel > level) {
            return;
        }
        minDist[person] = currLevel;

        const personFriends = friends[person];
        for (const friend of personFriends) {
            dfs(friend, currLevel + 1);
        }
    }

    dfs(id, 0);

    let videos = new Map();

    for (let i = 0; i < minDist.length; i++) {
        if (minDist[i] === level) {
            for (let j = 0; j < watchedVideos[i].length; j++) {
                videos.set(watchedVideos[i][j], (videos.get(watchedVideos[i][j]) + 1) || 1);
            }
        }
    }

    videos = [...videos]
    videos.sort((a, b) => {
        if (a[1] < b[1]) {
            return -1;
        } else if (a[1] > b[1]) {
            return 1;
        } else {
            return a[0] <= b[0] ? -1 : 1;
        }
    })
    videos = videos.map(e => e[0]);
    
    return videos;
};