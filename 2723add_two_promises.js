// https://leetcode.com/problems/add-two-promises/

var addTwoPromises = async function(promise1, promise2) {
    const res1 = await promise1;
    const res2 = await promise2;

    return res1 + res2;
};