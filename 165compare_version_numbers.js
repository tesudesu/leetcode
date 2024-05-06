// https://leetcode.com/problems/compare-version-numbers/

var compareVersion = function(version1, version2) {
    version1 = version1.split(".").map(e => Number(e));
    version2 = version2.split(".").map(e => Number(e));

    let i = 0;
    let j = 0;

    while (i < version1.length && j < version2.length) {
        if (version1[i] < version2[j]) {
            return -1;
        } else if (version1[i] > version2[j]) {
            return 1;
        }
        i++;
        j++;
    }

    while (i < version1.length) {
        if (version1[i] > 0) {
            return 1;
        }
        i++;
    }

    while (j < version2.length) {
        if (version2[j] > 0) {
            return -1;
        }
        j++;
    }

    return 0;
};