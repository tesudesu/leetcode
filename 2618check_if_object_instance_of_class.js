// https://leetcode.com/problems/check-if-object-instance-of-class/

var checkIfInstanceOf = function(obj, classFunction) {
    if (obj === null || obj === undefined || typeof classFunction !== "function") {
        return false;
    }

    let currPrototype = Object.getPrototypeOf(obj);
    while (currPrototype) {
        if (currPrototype === classFunction.prototype) return true;
        currPrototype = Object.getPrototypeOf(currPrototype);
    }

    return false;
};