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

const isSymmetricPair = (left, right) => {
    if(!left && !right) return true;
    if(!left || !right) return false;
    if(left.val !== right.val) return false
    return isSymmetricPair(left.left, right.right) && isSymmetricPair(left.right, right.left);
}

var isSymmetric = function(root) {
    return isSymmetricPair(root.left, root.right);    
};