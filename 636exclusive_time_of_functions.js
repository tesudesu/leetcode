// https://leetcode.com/problems/exclusive-time-of-functions/

var exclusiveTime = function(n, logs) {
    let stack = [];
    let tempStack = [];
    const ans = Array(n).fill(0);

    for (let i = 0; i < logs.length; i++) {
        let [id, call, time] = logs[i].split(":");
        time = Number(time);
        if (call === "start") {
            if (stack.length !== 0) {
                let [prevId, prevTime] = stack.pop();
                ans[prevId] += time - prevTime;
                tempStack.push(prevId);
            }
            stack.push([id, time]);
        } else {
            let [prevId, prevTime] = stack.pop();
            ans[id] += time - prevTime + 1;
            if (tempStack.length > 0) {
                const tempId = tempStack.pop();
                stack.push([tempId, time + 1]);
            }
        }
    }

    return ans;
};