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
 * @return {number}
 */
var maxDepth = function(root) {    
    // this.val 3
    // this.left 부터 확인 null이 아니면 maxDepth(this.)
    // this.val 9
    // this.left 부터 확인 null이 아니면 먼저 this.val에 넣음. 하지만 null
    // this.right 확인 하지만 null
    // 둘 다 null이므로 이번 재귀 스택에서 return 카운트 1
    // this.val 3
    if (root === null) return 0;
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);
    // 둘 중에 더 높은 카운트 선택
    return Math.max(leftDepth, rightDepth) + 1;
};