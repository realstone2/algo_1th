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
var isSymmetric = function(root) {
    if(!root){
        return true;
    }

    if(root.left?.val !== root.right?.val){
        return false
    }

    return compareNode(root.left, root.right);
};

function compareNode(left,right){
    if(left?.val == null && right?.val == null){
        return true;
    }

    if(left?.val !== right?.val){
        return false;
    }

    return compareNode(left?.left, right?.right) && compareNode(left?.right, right?.left)
}