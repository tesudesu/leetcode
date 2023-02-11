// https://leetcode.com/problems/minimum-index-sum-of-two-lists/

var findRestaurant = function(list1, list2) {
    let strings = [];
    let indices = [];
    for (let i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; j++) {
            if (list1[i] == list2[j]) {
                strings.push(list1[i]);
                indices.push(i+j);
                break;
            }
        }
    }
    const min = Math.min(...indices);
    let ans = [];
    for (let i = 0; i < strings.length; i++) {
        if (indices[i] == min) {
            ans.push(strings[i]);
        }
    }
    return ans;
};