/* https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/ */

var sortedArrayToBST = function (nums) {
    function helper(start, end) {
        if (start > end) {
            return null;
        }
        const mid = Math.floor((start + end) / 2);
        const root = new TreeNode(nums[mid]);
        root.left = helper(start, mid - 1);
        root.right = helper(mid + 1, end);

        return root;
    }
    return helper(0, nums.length - 1);
};
