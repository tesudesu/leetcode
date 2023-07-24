// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

var sortedArrayToBST = function(nums) {
    if (nums.length === 0) return null;

    const mid = Math.floor(nums.length / 2);

    const root = new TreeNode(nums[mid]);

    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));

    return root;
};

// var sortedArrayToBST = function(nums) {
//     const helper = (start, end) => {
//         if (start > end) return null;
//         const mid = Math.floor((end - start) / 2) + start;
//         return new TreeNode(nums[mid], helper(start, mid - 1), helper(mid + 1, end));
//     }

//     return helper(0, nums.length - 1);
// };