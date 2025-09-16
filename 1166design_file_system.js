// https://leetcode.com/problems/design-file-system/

var FileSystem = function() {
    this.paths = new Map();
};

/** 
 * @param {string} path 
 * @param {number} value
 * @return {boolean}
 */
FileSystem.prototype.createPath = function(path, value) {
    if (this.paths.has(path)) return false;

    let parent = path.split("/");

    if (parent.length === 2) {
        this.paths.set(path, value);
        return true;
    }

    parent.pop();
    parent = parent.join("/");

    if (!this.paths.has(parent)) {
        return false;
    } else {
        this.paths.set(path, value);
        return true;
    }
};

/** 
 * @param {string} path
 * @return {number}
 */
FileSystem.prototype.get = function(path) {
    if (this.paths.has(path)) {
        return this.paths.get(path);
    } else {
        return -1;
    }
};