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
    // this.val 보다 this.right이 커야함
    // this.val 보다 this.left가 커야함
    let previousValue = null; // 비교할 이전 값 기억
    
    const inorderTraversal = (node) => {
        if (node === null) return true
        
        if (!inorderTraversal(node.left)) return false
        
        if (previousValue !== null && node.val <= previousValue) return false

        previousValue = node.val;
        
        return inorderTraversal(node.right);
    };
    
    return inorderTraversal(root);
};