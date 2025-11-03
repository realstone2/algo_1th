/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sortedArrayToBST(nums: number[]): TreeNode | null {
    const go = (left, right) => {
        if(left > right) return null

        const mid = Math.floor((left+right)/2)
        const node = new TreeNode(nums[mid])

        node.left = go(left, mid-1)
        node.right = go(mid+1, right)

        return node;
    }

    return go(0, nums.length-1)
};

