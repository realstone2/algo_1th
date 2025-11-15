
const MIN = Number.MIN_SAFE_INTEGER
const MAX = Number.MAX_VALUE
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
    if(!root){
        return true;
    }

    return isValid(root.left, MIN, root.val) && isValid(root.right, root.val, MAX)
};

const isValid = (root, min, max) => {
     if(!root){
        return true;
    }

    const left = root.left?.val ?? min;
    const right = root.right?.val ?? max;

    if(left < root.val &&  root.val < right){
        const isLeftValid = isValid(root.left, min, root.val) 
        const isRightValid = isValid(root.right, root.val, max);

        return isLeftValid && isRightValid;
    }

    return false
}