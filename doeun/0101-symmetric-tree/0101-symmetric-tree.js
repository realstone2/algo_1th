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
const isSymmetric = function(root) {
    if (!root) return true;
    
    const isMirror = (left, right) => {
        // 둘 다 null이면 대칭
        if (!left && !right) return true;
        // 하나만 null이면 비대칭
        if (!left || !right) return false;
        // 값이 다르면 비대칭
        if (left.val !== right.val) return false;
        
        // 재귀: 왼쪽의 left와 오른쪽의 right 비교
        //      왼쪽의 right와 오른쪽의 left 비교
        return isMirror(left.left, right.right) && 
               isMirror(left.right, right.left);
    };
    
    return isMirror(root.left, root.right);
};