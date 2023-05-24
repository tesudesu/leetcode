// https://leetcode.com/problems/array-of-objects-to-matrix/

var jsonToMatrix = function(arr) {
    let flatObj = [];

    let objKeys = [];

    const getKeys = (obj) => {
      const res = [];
      for (const key of Object.keys(obj)) {
        const val = obj[key];

        if (typeof val !== "object" || val === null) {
          res[key] = val;
        } else {
          const child = getKeys(val);
          for (const k of Object.keys(child)) {
            res[`${key}.${k}`] = child[k];
          }
        }
      }
      return res;
    }

    for (let i = 0; i < arr.length; i++) {
      flatObj.push(getKeys(arr[i]));
    }

    let ans = Array(flatObj.length);

    for (let i = 0; i < flatObj.length; i++) {
      for (const key of Object.keys(flatObj[i])) {
        objKeys.push(key);
      }
    }

    const keySet = [...new Set(objKeys)].sort();

    for (let i = 0; i < flatObj.length; i++) {
      let row = Array(keySet.length).fill("");
      for (const key of Object.keys(flatObj[i])) {
        for (let j = 0; j < keySet.length; j++) {
          if (key === keySet[j]) {
            row[j] = flatObj[i][key];
          }
        }
      }
      ans[i] = row;
    }

    ans.unshift(keySet);

    return ans;
};