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
    // 더이상 순회할 루트가 없으면 BST 조건 검증이 필요없으므로 통과시킴
    if(!root) return true;
    
    const isRightVaild = isValidBST(root.right);
    const isLeftValid = isValidBST(root.left);

    if(root.left && root.val <= root.left.val) return false;
    if(root.right && root.val >= root.right.val) return false;
    
    return isRightVaild && isLeftValid
};