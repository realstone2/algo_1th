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
var sortedArrayToBST = function(nums) {
    
    const func = (left, right) => {
        if(left > right) return null;

        const mid = Math.floor((right-left)/2 + left);
        const root = new TreeNode(nums[mid])

        root.left = func(left, mid-1);
        root.right = func(mid+1, right);

        return root;     

    }

    return func(0, nums.length -1)
};