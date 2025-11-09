/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function(nums) {
    function helperFunc(array, start, end) {
        if (start > end) {
            return null;
        }

        const mid = Math.floor((start + end) / 2);

        const node = new TreeNode(array[mid]);
        console.log(mid, start, end, node)
        node.left = helperFunc(array, start, mid - 1);

        node.right = helperFunc(array, mid + 1, end);

        return node;
    }

    return helperFunc(nums, 0, nums.length - 1);
};