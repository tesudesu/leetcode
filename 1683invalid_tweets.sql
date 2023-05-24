-- https://leetcode.com/problems/invalid-tweets/

SELECT tweet_id from Tweets WHERE length(content) > 15;