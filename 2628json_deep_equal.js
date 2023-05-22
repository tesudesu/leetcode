// ttps://leetcode.com/problems/json-deep-equal/

var areDeeplyEqual = function(o1, o2) {
    if (o1 === o2) return true;
    if (String(o1) != String(o2)) return false;

    if (Array.isArray(o1)) {
        if (!Array.isArray(o2)) return false;
        if (o1.length !== o2.length) return false;
        for (let i = 0; i < o1.length; i++) {
            if (!areDeeplyEqual(o1[i], o2[i])) return false;
        }
    }

    if (Object.keys(o1).length !== Object.keys(o2).length) return false;

    for (const property in o1) {
        if (!property in o2) return false;
        if (!areDeeplyEqual(o1[property], o2[property])) return false;
    }

    return true;
};