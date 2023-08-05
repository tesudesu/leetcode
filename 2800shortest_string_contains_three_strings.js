// https://leetcode.com/problems/shortest-string-that-contains-three-strings/

var minimumString = function (a, b, c) {
    const merge = (str1, str2) => {
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] === str2[0]) {
                let found = true;
                for (let j = 1; j < str2.length; j++) {
                    if (i + j >= str1.length) {
                        return str1.slice(0, i) + str2;
                    }
                    if (str2[j] !== str1[i + j]) {
                        found = false;
                        break;
                    }
                }
                if (found) {
                    return str1;
                }
            }
        }

        return str1 + str2;
    }

    const ab = merge(a, b);
    const ac = merge(a, c);
    const ba = merge(b, a);
    const bc = merge(b, c);
    const ca = merge(c, a);
    const cb = merge(c, b);

    let smallest = merge(ab, c);

    let next = merge(ac, b);
    if (next.length < smallest.length || (next.length === smallest.length && next < smallest)) {
        smallest = next;
    }

    next = merge(ba, c);
    if (next.length < smallest.length || (next.length === smallest.length && next < smallest)) {
        smallest = next;
    }

    next = merge(bc, a);
    if (next.length < smallest.length || (next.length === smallest.length && next < smallest)) {
        smallest = next;
    }

    next = merge(ca, b);
    if (next.length < smallest.length || (next.length === smallest.length && next < smallest)) {
        smallest = next;
    }

    next = merge(cb, a);
    if (next.length < smallest.length || (next.length === smallest.length && next < smallest)) {
        smallest = next;
    }

    return smallest;
};