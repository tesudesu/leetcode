// https://leetcode.com/problems/promise-pool/

var promisePool = async function (functions, n) {
    return new Promise((resolve) => {
        let curr = 0;
        let inProgress = 0;

        const runFunction = () => {

            while (curr < functions.length && inProgress < n) {
                const promise = functions[curr]();
                curr++;
                inProgress++;
                promise.then(() => {
                    inProgress--;
                    runFunction();
                });
            }

            if (curr >= functions.length && inProgress === 0) {
                return resolve();
            }
        }

        runFunction();
    })
};