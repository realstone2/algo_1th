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
    // 우선 중간을 찾자, Math.floor
    // 중앙을 찾고 그 양 옆에 있는 요소를 넣어준다
    // 재귀반복
    
    if(!nums.length) return null

    let mid = Math.floor(nums.length /2)
    let root = new TreeNode(nums[mid])

    root.left = sortedArrayToBST(nums.slice(0, mid))
    root.right = sortedArrayToBST(nums.slice(mid+1))

    return root

};