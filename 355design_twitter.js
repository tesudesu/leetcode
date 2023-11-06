// https://leetcode.com/problems/design-twitter/

var Twitter = function() {
    this.tweets = new Map();
    this.follows = new Map();
    this.timestamp = 1;
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    if (this.tweets.has(userId)) {
        let arr = this.tweets.get(userId);
        arr.push([tweetId, this.timestamp]);
        this.tweets.set(userId, arr);
    } else {
        this.tweets.set(userId, [[tweetId, this.timestamp]]);
    }
    this.timestamp++;
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    let allTweets = [];
    if (this.tweets.has(userId)) {
        const userTweets = this.tweets.get(userId);
        allTweets.push(...userTweets);
    }
    if (this.follows.has(userId)) {
        const userFollows = this.follows.get(userId);
        for (const followee of userFollows) {
            if (this.tweets.has(followee)) {
                const followeeTweets = this.tweets.get(followee);
                allTweets.push(...followeeTweets);
            }
        }
    }

    let ans = [];

    allTweets.sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < 10; i++) {
        if (i >= allTweets.length) break;
        ans.push(allTweets[i][0]);
    }

    return ans;
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if (this.follows.has(followerId)) {
        const following = this.follows.get(followerId);
        following.add(followeeId);
        this.follows.set(followerId, following);
    } else {
        const following = new Set();
        following.add(followeeId);
        this.follows.set(followerId, following);
    }
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if (this.follows.has(followerId)) {
        const following = this.follows.get(followerId);
        following.delete(followeeId);
        this.follows.set(followerId, following);
    }
};