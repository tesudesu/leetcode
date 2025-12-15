// https://leetcode.com/problems/most-popular-video-creator/

var mostPopularCreator = function(creators, ids, views) {
    const map = new Map();
    let mostPopularCount = 0;

    for (let i = 0; i < creators.length; i++) {
        map.set(creators[i], (map.get(creators[i]) || 0) + views[i]);
        mostPopularCount = Math.max(mostPopularCount, map.get(creators[i]));
    }

    const creatorIDs = new Map();
    const creatorViews = new Map();

    for (const [creator, count] of map) {
        if (count === mostPopularCount) {
            creatorIDs.set(creator, "");
            creatorViews.set(creator, -1);
        }
    }

    for (let i = 0; i < views.length; i++) {
        if (!map.has(creators[i])) continue;
        if (views[i] > creatorViews.get(creators[i])) {
            creatorViews.set(creators[i], views[i]);
            creatorIDs.set(creators[i], ids[i]);
        } else if (views[i] === creatorViews.get(creators[i])) {
            if (creatorIDs.get(creators[i]) > ids[i]) {
                creatorIDs.set(creators[i], ids[i]);
            }
        }
    }

    return [...creatorIDs];
};