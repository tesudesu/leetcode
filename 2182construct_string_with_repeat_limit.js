// https://leetcode.com/problems/construct-string-with-repeat-limit/

var repeatLimitedString = function(s, repeatLimit) {
    const freq = Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i) - 97;
        freq[code]++;
    }

    const maxQueue = new MaxPriorityQueue({priority: a => a[0]});

    for (let i = 0; i < freq.length; i++) {
        if (freq[i] === 0) continue;
        maxQueue.enqueue([i, freq[i]]);
    }

    let limit = 1;
    let ans = [];

    while (maxQueue.size() > 0) {
        let [code, count] = maxQueue.dequeue().element;
        const char = String.fromCharCode(code + 97);
        if (ans.length > 0 && char === ans[ans.length - 1]) {
            if (limit === repeatLimit) {
                if (maxQueue.size() > 0) {
                    let [code2, count2] = maxQueue.dequeue().element;
                    count2--;
                    const char2 = String.fromCharCode(code2 + 97);
                    ans.push(char2);
                    if (count2 > 0) {
                        maxQueue.enqueue([code2, count2]);
                    }
                    limit = 1;
                    maxQueue.enqueue([code, count]);
                    continue;
                } else {
                    break;
                }
            } else {
                limit++;
                ans.push(char);
                count--;
                if (count > 0) {
                    maxQueue.enqueue([code, count]);
                }
            }
        } else {
            ans.push(char);
            count--;
            if (count > 0) {
                maxQueue.enqueue([code, count]);
            }
            limit = 1;
        }
    }

    return ans.join("");
};