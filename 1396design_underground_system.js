// https://leetcode.com/problems/design-underground-system/

var UndergroundSystem = function() {
    this.ids = {};
    this.times = {};
};

UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.ids[id] = {startStation: stationName, startTime: t};
};

UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const startStation = this.ids[id].startStation
    const interval = t - this.ids[id].startTime
    const stations = startStation + '-' + stationName;
    if (this.times.hasOwnProperty(stations)) {
        this.times[stations].push(interval);
    } else {
        this.times[stations] = [interval];
    }
    delete this.ids[id];
};

UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const find = startStation + '-' + endStation;
    const intervals = this.times[find];
    let tot = intervals.length;
    let sum = 0;

    for (let i = 0; i < intervals.length; i++) {
        sum += intervals[i];
    }
    return sum/tot;
};