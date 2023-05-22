// https://leetcode.com/problems/cache-with-time-limit/

var TimeLimitedCache = function () {
    this.pairs = new Map();
    this.timeout = {};
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
    if (!this.pairs.has(key)) {
        this.pairs.set(key, value);
        this.timeout[key] = setTimeout(() => {
            this.pairs.delete(key);
        }, duration);
        return false;
    } else {
        this.pairs.set(key, value);
        clearTimeout(this.timeout[key]);
        this.timeout[key] = setTimeout(() => {
            this.pairs.delete(key);
        }, duration);
        return true;
    }
};

TimeLimitedCache.prototype.get = function (key) {
    const value = this.pairs.get(key);
    return value ? value : -1;
};


TimeLimitedCache.prototype.count = function () {
    return this.pairs.size;
};