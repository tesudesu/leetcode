// https://leetcode.com/problems/differences-between-two-objects/

function objDiff(obj1, obj2) {
    let output = {};

    if (obj1 === obj2) return {};

    if (obj1 === null || obj2 === null) {
        return [obj1, obj2];
    }

    if (typeof obj1 !== "object" || typeof obj2 !== "object") {
        return [obj1, obj2];
    }

    if (Array.isArray(obj1) !== Array.isArray(obj2)) {
        return [obj1, obj2];
    }

    for (const key in obj1) {
        if (key in obj2) {
            const diff = objDiff(obj1[key], obj2[key]);
            if (Object.keys(diff).length !== 0) {
                output[key] = diff;
            }
        }
    }
    return output;
};