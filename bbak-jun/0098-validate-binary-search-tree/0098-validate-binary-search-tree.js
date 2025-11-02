/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let prev = null
    const stack = []
    let cur = root

    while(stack.length !== 0 || cur !== null) {
        while(cur !== null) {
            stack.push(cur)
            cur = cur.left
        }

        cur = stack.pop()
        
        if(prev !== null && cur.val <= prev) {
            return false
        }

        prev = cur.val
        cur = cur.right
    }

    return true
};