// https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/

var promiseAll = async function(functions) {
    return new Promise((resolve, reject) => {
        let res = Array(functions.length);
        let i = 0;

        functions.forEach(async (prom, ind) => {
            try {
                const val = await prom();
                res[ind] = val;
                i++;
                if (i === functions.length) {
                    resolve(res);
                }
            } catch (error) {
                reject(error);
            }
        });
    });
};

// var promiseAll = async function(functions) {
//     try {
//         return Promise.all(functions.map(func => func()));
//     } catch (error) {
//         throw error;
//     }
// };