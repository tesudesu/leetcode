// https://leetcode.com/problems/greatest-common-divisor-of-strings/

var gcdOfStrings = function(str1, str2) {
    const length1 = str1.length;
    const length2 = str2.length;
    if (length1 <= length2) {
        let substr = str1.slice();
        let repeats = 1;
        while (substr.length > 0) {
            while (substr.repeat(repeats).length <= length1) {
                if (substr.repeat(repeats) == str1) {
                    let repeating = 1;
                    while (substr.repeat(repeating).length <= length2) {
                        if (substr.repeat(repeating) == str2) {
                            return substr;
                        }
                        repeating++;
                    }
                }
                repeats++;
            }
            substr = substr.slice(0, -1);
        }
    } else {
        let substr = str2.slice();
        let repeats = 1;
        while (substr.length > 0) {
            while (substr.repeat(repeats).length <= length2) {
                if (substr.repeat(repeats) == str2) {
                    let repeating = 1;
                    while (substr.repeat(repeating).length <= length1) {
                        if (substr.repeat(repeating) == str1) {
                            return substr;
                        }
                        repeating++;
                    }
                }
                repeats++;
            }
            substr = substr.slice(0, -1);
        }
    }
    return "";
};