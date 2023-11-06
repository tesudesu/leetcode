// https://leetcode.com/problems/poor-pigs/

var poorPigs = function(buckets, minutesToDie, minutesToTest) {
    let trials = Math.floor(minutesToTest / minutesToDie);

    // (trials + 1)^pigs >= buckets
    let pigs = Math.ceil(Math.log2(buckets) / Math.log2(trials + 1));

    return pigs;
};