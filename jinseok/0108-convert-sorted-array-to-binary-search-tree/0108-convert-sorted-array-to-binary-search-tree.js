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
    if(nums.length === 0){
        return null
    }

    if(nums.length === 1){
        return new TreeNode(nums[0] ?? null, null, null);
    }

    const middle = Math.floor(nums.length / 2)

    const leftNodeList = sortedArrayToBST(nums.slice(0, middle))
    const rightNodeList = sortedArrayToBST(nums.slice(middle + 1))


    return new TreeNode(nums[middle] ?? null, leftNodeList , rightNodeList)

};
